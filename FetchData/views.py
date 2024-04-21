# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# import json

# @csrf_exempt
# def receive_data(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         print("called---------------", data)
#         # Process your data here
#         return JsonResponse({'status': 'success', 'data': data})
#     else:
#         return JsonResponse({'status': 'error', 'message': 'Only POST method is accepted.'})


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import filetype
#from .convertforms import *
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import spacy
from spacy.matcher import Matcher
#from .skills import *
#from .imageprocess import *
#from resume_parser import resumeparse
import FetchData
mainData = dict()

@csrf_exempt
def receive_data(request):
    if request.method == 'POST':
        # Access the file from the request.FILES
        file = request.FILES.get('resume')
        if file:
            # Here you can save the file or do other processing
            print("File received: ", file.size)
#--------------------------
            a = handle_uploaded_file(file)
            dictionary=handlefile(file)
            return JsonResponse({'status': 'success', 'file_name': file.name, 'file_size': file.size})
        else:
            return JsonResponse({'status': 'error', 'message': 'No file received.'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST method is accepted.'})


def send_data(request):
     print("------------>",mainData)
     return JsonResponse({
            'status': 'success',
            'data': mainData
        })


import os
def handle_uploaded_file(f):
    print("to handle function")
    directory = '/fetch/api/data/'
    if not os.path.exists(directory):
        os.makedirs(directory)
    file_path = os.path.join(directory, f.name)
    with open(file_path, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)



def handlefile(myfile):
	file_path = os.path.join('/fetch/api/data/', myfile.name)
	if not os.path.exists(file_path):
		print("File not found: ", file_path)
		return
	kind = filetype.guess(file_path)
	if kind is None:
		print('Cannot guess file type!')
		return
	print('File extension: %s' % kind.extension)
	print('File MIME type: %s' % kind.mime)

	if(kind.extension=="pdf"):
		from pdfminer3.layout import LAParams, LTTextBox
		from pdfminer3.pdfpage import PDFPage
		from pdfminer3.layout import LAParams, LTTextBox
		from pdfminer3.pdfpage import PDFPage
		from pdfminer3.pdfinterp import PDFResourceManager
		from pdfminer3.pdfinterp import PDFPageInterpreter
		from pdfminer3.converter import PDFPageAggregator
		from pdfminer3.converter import TextConverter
		import io

		resource_manager = PDFResourceManager()
		fake_file_handle = io.StringIO()
		codec='utf-8'
		converter = TextConverter(resource_manager, fake_file_handle,codec=codec, laparams=LAParams())
		page_interpreter = PDFPageInterpreter(resource_manager, converter)

		with open('/fetch/api/data/'+myfile.name, 'rb') as fh:

			for page in PDFPage.get_pages(fh,caching=True,check_extractable=True):
				
				page_interpreter.process_page(page)
				text = fake_file_handle.getvalue()

		converter.close()
		fake_file_handle.close()
		print(text)

	if(kind.extension=="png" or kind.extension=="jpg" or kind.extension=="webp"):
		from PIL import Image, ImageFilter, ImageChops
		import pytesseract
		from pytesseract import image_to_string
		import cv2
		filename='app/static/upload/'+myfile.name
		imgcv = cv2.imread(filename, 0)
		imp = Image.open(filename)
		text=image_to_string(imp)
		#text = main_fun(imgcv,imp,kind.extension)
		#text=main_fun(im)
		print(text)
		

	dictionary=MakeForm(text)
	#dictionary.replace('"', "'")
	#print(dictionary)
	FetchData.views.mainData = dictionary
	return dictionary

def MakeForm(text):
	length=len(text)
	dictionary={}
	flag=0
	count=0
	lines=text.splitlines()
	lines = [x for x in lines if x != '' and x != ' ' and x!='• '] 
	text=text.replace(',','\n')
	#print(lines)
	dictionary=basicdetails(lines,text)
	# dictionary['Address']=" "
	# email=dictionary['Email']
	# if dictionary['Phone']==None:
	# 	dictionary['Phone']="000000000"
	# if dictionary['Email']==None:
	# 	dictionary['Email']="abc@gmail.com"
	# if dictionary['Name']==None:
	# 	dictionary['Name']="xyz"
	# dictionary['marital']="unmarried"
	# edu={}
	# education=[]
	# inter={}
	# internship=[]
	# pro={}
	# project=[]
	# skills=[]
	# trainings=0
	# trainings=[]
	# train={}
	# skillmode=0
	# no=0
	# no_edu=0
	# for line in lines:
	# 	check_line=line.lower()
	# 	line=re.sub(r"[^a-zA-Z0-9%-.@:\'\"$+/]"," ",line)
	# 	#print('line=',line,flag,count,skillmode)

	# 	if skillmode==1:
	# 		#print(check_line)
	# 		if isskill(check_line)==True:
	# 			line=line.replace("[^a-zA-Z0-9]", " ")
	# 			skills.append(line)

	# 	if check_line.find("github")!=-1:
	# 		dictionary["github"]=line
	# 		continue
	# 	if check_line.find("linkedin")!=-1:
	# 		dictionary["linkedin"]=line
	# 		continue

	# 	if  bool(re.search(r'\s{0,2}skills\s{0,2}$', check_line)) ==True or line.find("Skills")!=-1 or line.find("SKILLS")!=-1:
	# 		skillmode=1
	# 		flag=0
	# 		count=0
	# 		continue

	# 	if 'responsibility' in check_line or 'education' in check_line  or dictionary['Name'] in line or dictionary['Phone'] in line or dictionary['Email'] in line:
	# 		continue
		
	# 	if line =="  ":
	# 		flag=0
	# 		count=0
	# 	if(check_line.find('internships')!=-1) or bool(re.search(r'\s{0,2}experience\s{0,2}$', check_line)) ==True or (check_line.find('employment history')!=-1):
	# 		#print(line)
	# 		flag=2
	# 		count=0
	# 		skillmode=0
	# 		continue
	# 	if (check_line.find('projects')!=-1) or  bool(re.search(r'\s{0,2}project\s{0,2}$', check_line)) ==True or bool(re.search(r'\s{0,2}projects\s{0,2}$', check_line)) ==True:
	# 		flag=3
	# 		count=0
	# 		skillmode=0
	# 		continue

	# 	if(check_line.find('trainings')!=-1)  or (check_line.find('certifications')!=-1):
	# 		#print(line)
	# 		flag=4
	# 		count=0
	# 		skillmode=0
	# 		continue

	# 	if flag==2:
	# 			#print('intern',count)
	# 			if bool(re.search(r'[0-9]{4}', check_line))==True and count==0:
	# 					inter['Date']=line
	# 					count=0
	# 					continue

	# 			#print(line)
	# 			employment_type=find_emp_type(check_line)
	# 			if employment_type !=None:
	# 				inter['EmpType']=employment_type
	# 			if count==3 :
					
	# 				if len(line)>=20:
	# 					if bool(re.search(r'.\s*$', check_line)) ==True:
	# 						if no==0:
	# 							inter['Description']=line
	# 							#print('final')
	# 							#print(line)
	# 						else:
	# 							des+=line
	# 							inter['Description']=des

	# 						no=0
	# 					else:
	# 						if no==0:
	# 							des=""
	# 						no=no+1
	# 						des+=line+" "
	# 						#print(des)
	# 						#inter['Description']=des
	# 						continue
	# 				else:
	# 					inter['Description']=" "

	# 				if 'EmpType' not in inter.keys():
	# 					inter['EmpType']="Internship"
	# 				if 'Date' not in inter.keys():
	# 					inter['Date']="2000-01-01"
	# 				if 'EndDate' not in inter.keys():
	# 					inter['EndDate']="2000-01-01"
	# 				internship.append(inter)
	# 				#obj=Internship(email=email,position=inter['Position'],company=inter['Company'],date=inter['Date'],desc=inter['Description'])
	# 				#obj.save()
	# 				inter={}
	# 				count=0
	# 			elif count==2 :
	# 				if 'Date' not in inter.keys():
	# 					if bool(re.search(r'[0-9]{4}', check_line))==True :
	# 						l=re.findall(r'[0-9]{4}', check_line)
	# 						if len(l)==1:
	# 							start_date=l[0]+"-01-01"
	# 							edu['Date']=start_date
	# 							end_date="2000-01-01"
	# 							edu['EndDate']=end_date
	# 						if len(l)==2:
	# 							start_date=l[0]+"-01-01"
	# 							edu['Date']=start_date
	# 							end_date=l[1]+"-01-01"
	# 							edu['EndDate']=end_date
	# 						count=3
	# 						continue
	# 					else:
	# 						inter['Date']="2000-01-01"
	# 				else:
	# 					count=3
	# 			elif count==1 :
	# 				if bool(re.search(r'\d', check_line)) ==False :
	# 					line=re.sub(r"[^a-zA-Z0-9]"," ",line)
	# 					inter['Company']=line
	# 					count=2
	# 					continue
	# 				else:
	# 					inter['Company']=" "
	# 			elif count==0 :
	# 				if bool(re.search(r'\d', check_line)) ==False and inpositions(line):
	# 					line=re.sub(r"[^a-zA-Z]"," ",line)
	# 					inter['Position']=line
	# 					count=1
	# 					continue

	# 	if flag==3:
	# 			#print('project',count)
	# 			#print(line)
	# 			if count==3 :
	# 				#if bool(re.search(r'\d', check_line)) ==False :
	# 				if bool(re.search(r'[0-9]{4}', check_line))==True and  line.find("https://")==-1:
	# 					l=re.findall(r'[0-9]{4}', check_line)
	# 					#print(l)
	# 					if len(l)==1:
	# 						start_date=l[0]+"-01-01"
	# 						pro['Date']=start_date
	# 						end_date="2000-01-01"
	# 						pro['EndDate']=end_date
	# 					if len(l)==2:
	# 						start_date=l[0]+"-01-01"
	# 						pro['Date']=start_date
	# 						end_date=l[1]+"-01-01"
	# 						pro['EndDate']=end_date
	# 					#print(line)
	# 				else:
	# 					newname=line

	# 				pro['Description']=" "
	# 				if 'Link' not in pro.keys():
	# 					pro['Link']="https://"
	# 				if 'Date' not in pro.keys():
	# 					pro['Date']="2000-01-01"
	# 				if 'EndDate' not in pro.keys():
	# 					pro['EndDate']="2000-01-01"
	# 				project.append(pro)
	# 				pro={}
	# 				pro['Name']=newname
	# 				count=1
					
	# 			elif count==2 :
	# 				if(line.find("https://")!=-1):
	# 					pro['Link']=line
	# 				else:
	# 					pro['Link']=line
	# 				pro['Description']=""
	# 				project.append(pro)
	# 				pro={}
	# 				count=0
					
	# 			elif count==1 :
	# 				if bool(re.search(r'[0-9]{4}', check_line))==True and  line.find("https://")==-1:
	# 					l=re.findall(r'[0-9]{4}', check_line)
	# 					#print(l)
	# 					if len(l)==1:
	# 						start_date=l[0]+"-01-01"
	# 						pro['Date']=start_date
	# 						end_date="2000-01-01"
	# 						pro['EndDate']=end_date
	# 					if len(l)==2:
	# 						start_date=l[0]+"-01-01"
	# 						pro['Date']=start_date
	# 						end_date=l[1]+"-01-01"
	# 						pro['EndDate']=end_date
	# 					#print(line)
	# 					count=2
	# 				else:
	# 					if(line.find("https://")!=-1):
	# 						pro['Date']="2000-01-01"
	# 						pro['EndDate']="2000-01-01"
	# 						pro['Link']=line
	# 						count=3
	# 					else:
	# 						print("here")
	# 						print(line)
	# 						print(pro['Name'])
	# 						pro['Date']="2000-01-01"
	# 						pro['EndDate']="2000-01-01"
	# 						pro['Link']=""
	# 						project.append(pro)
	# 						pro={}
	# 						pro['Date']="2000-01-01"
	# 						pro['EndDate']="2000-01-01"
	# 						pro['Link']=""
	# 						pro['Name']=line
	# 						project.append(pro)
	# 						pro={}
	# 						count=0

	# 			elif count==0 :
	# 				if bool(re.search(r'[0-9]{4}', check_line))==True and  line.find("https://")==-1:
	# 					l=re.findall(r'[0-9]{4}', check_line)
	# 					#print(l)
	# 					if len(l)==1:
	# 						start_date=l[0]+"-01-01"
	# 						pro['Date']=start_date
	# 						end_date="2000-01-01"
	# 						pro['EndDate']=end_date
	# 					if len(l)==2:
	# 						start_date=l[0]+"-01-01"
	# 						pro['Date']=start_date
	# 						end_date=l[1]+"-01-01"
	# 						pro['EndDate']=end_date
	# 					#print(line)
	# 					count=2
	# 				else:
	# 					if(line.find("https://")!=-1):
	# 						pro['Date']="2000-01-01"
	# 						pro['EndDate']="2000-01-01"
	# 						pro['Link']=line
	# 						count=3
	# 					else:
	# 						print(line)
	# 						pro['Name']=line
	# 						count=1
	# 	if flag==4:
	# 		if count==0:
	# 			if bool(re.search(r'\d', check_line)) ==False and len(line)<=70:
	# 				line=re.sub(r"[^a-zA-Z0-9]"," ",line)
	# 				train['Title']=line
	# 				count=1

	# 		elif count==1:
	# 			if bool(re.search(r'\d', check_line)) ==False and len(line)<=70:
	# 				line=re.sub(r"[^a-zA-Z0-9]"," ",line)
	# 				train['organization']=line
	# 				count=2
	# 			elif bool(re.search(r'[0-9]{4}', check_line))==True and  line.find("https://")==-1:
	# 				l=re.findall(r'[0-9]{4}', check_line)
	# 				#print(l)
	# 				if len(l)==1:
	# 					start_date=l[0]+"-01-01"
	# 					train['Date']=start_date
	# 					#print(line)
	# 				count=1

	# 		elif count==2:
	# 			if bool(re.search(r'[0-9]{4}', check_line))==True and  line.find("https://")==-1 and 'Date' not in train.keys():
	# 					l=re.findall(r'[0-9]{4}', check_line)
	# 					#print(l)
	# 					if len(l)==1:
	# 						start_date=l[0]+"-01-01"
	# 						train['Date']=start_date
	# 					#print(line)
	# 					count=3
	# 			if 'Date' in train.keys():
	# 				count=3
	# 				continue

	# 		elif count==3:
	# 			if len(line)<=50 and bool(re.search(r'\d', check_line)) ==True or  line.find("https://")==-1:
	# 				line=re.sub(r"[^a-zA-Z0-9]"," ",line)
	# 				train['credentials']=line
	# 				if 'Date' not in train.keys():
	# 					train['Date']="2000-01-01"
	# 				trainings.append(train)
	# 				train={}
	# 				count=0
	# 			elif bool(re.search(r'\d', check_line)) ==False and len(line)<=70:
	# 				line=re.sub(r"[^a-zA-Z0-9]"," ",line)
	# 				train['Title']=line
	# 				train['credentials']="undefined"
	# 				if 'Date' not in train.keys():
	# 					train['Date']="2000-01-01"
	# 				trainings.append(train)
	# 				train={}
	# 				count=0


	# if 'degrees' in dictionary.keys():
	# 	degrees=dictionary['degrees']	
	# else:
	# 	no_edu=1	
	
	# word_tokens = nltk.word_tokenize(text) 
	
	# if no_edu ==0:
	# 	for deg in degrees:
	# 		flag=0
	# 		if deg=="x":
	# 			deg+=" "
	# 		edu={}
	# 		for line in lines:
	# 			check_line=line.lower()
	# 			if check_line.find(deg)!=-1 :
	# 				line=re.sub(r"[^a-zA-Z]"," ",line)
	# 				edu['Degree']=line
	# 				field_of_study=find_fields(check_line)
	# 				if field_of_study!=None and 'field_of_study' not in edu:
	# 					edu['field_of_study']=field_of_study
	# 				flag=1
	# 			elif flag==1:
	# 			#print(line)
	# 				if bool(re.search(r'\d', check_line)) ==False and 'Institution' not in edu:
	# 					edu['Institution']=line
	# 				if  bool(re.search(r'[0-9]{4}', check_line))==True and 'Date' not in edu:
	# 					l=re.findall(r'[0-9]{4}', check_line)
	# 					#print(l)
	# 					if len(l)==1:
	# 						start_date=l[0]+"-01-01"
	# 						edu['Date']=start_date
	# 						end_date="2000-01-01"
	# 						edu['EndDate']=end_date
	# 					if len(l)==2:
	# 						start_date=l[0]+"-01-01"
	# 						edu['Date']=start_date
	# 						end_date=l[1]+"-01-01"
	# 						edu['EndDate']=end_date
	# 					#edu['Date']=line

	# 				if check_line.find("grade")!=-1 or check_line.find("gpa")!=-1 or check_line.find("cgpa")!=-1 or check_line.find("%")!=-1 and 'Grade' not in edu:
	# 					line=re.sub(r"[^0-9.%]"," ",line)
	# 					edu['Grade']=line
	# 				field_of_study=find_fields(check_line)
	# 				if field_of_study!=None and 'field_of_study' not in edu:
	# 					edu['field_of_study']=field_of_study
	# 		education.append(edu)

	# dictionary['Trainings']=trainings
	# dictionary["Education"]=education
	# dictionary["Internships"]=internship
	# dictionary['Projects']=project
	# dictionary['Skills']=skills
	#print(skills)
	print(dictionary)
	
	return dictionary



def basicdetails(lines,text):
    import spacy
    from spacy.matcher import Matcher
    import nltk

    # load pre-trained model
    nlp = spacy.load('en_core_web_sm')

    # initialize matcher with a vocab
    matcher = Matcher(nlp.vocab)
    dictionary={}
    def extract_name(resume_text,lines):
                    
        nlp = spacy.load("en_core_web_sm")
        pattern = [{'POS': 'PROPN'}, {'POS': 'PROPN'}]
        matcher.add("NAME", [pattern]) 
        nlp_text = nlp(resume_text)
        matches = matcher(nlp_text)
        for match_id, start, end in matches:
            span = nlp_text[start:end]
            return span.text

    print('Name')
    name=extract_name(text,lines)
    print(name)
    dictionary["Name"]=name

    import re

    # def extract_mobile_number(text):
    #     phone = re.findall(re.compile(r'[0-9]{0,2}\s*[0-9]{10}'), text)
        
    #     if phone:
    #         number = ''.join(phone[0])
    #         if len(number) > 10:
    #             return '+' + number
    #         else:
    #             return number


    # print('Phone')
    # phone=(extract_mobile_number(text))
    # print(phone)
    # dictionary['Phone']=phone

    def extract_email(email):
        email = re.findall("([^@|\s]+@[^@]+\.[^@|\s]+)", email)
        if email:
            try:
                return email[0].split()[0].strip(';')
            except IndexError:
                return None

    print('email')
    email=(extract_email(text))
    print(email)
    dictionary["Email"]=email
    print("version",nltk.data.path)
    nltk.download('punkt', download_dir='C:\\Users\\DIPAM GHOSH\\Envs\\dipam\\nltk_data')





    word_tokens = nltk.word_tokenize(text) 
    #print(word_tokens)

    def extract_degrees(lines):
        degrees=['b.tech','ba','ma','xii','b.sc','m.sc','m.tech','mca','high','senior','x','bachelor','bachelors','master','masters','specialization','mba','msc','10+2']
        in_degrees=[]
        for w in lines:
            w=w.lower()
            if w in degrees:
                if w=='senior' and 'xii' in in_degrees or w=='junior' and 'x' in in_degrees or w=='bachelor' and 'b.tech' in in_degrees or w=='b.tech' and 'bachelor' in in_degrees or w=='masters' and 'm.tech' in in_degrees or w=='msc' and 'm.sc' in in_degrees or w=='m.sc' and 'msc' in in_degrees :
                    continue
                in_degrees.append(w)
        return in_degrees

    degrees=[]
    for w in word_tokens:
        if w.lower()=="education":
            degrees=extract_degrees(word_tokens)
            count_edu=len(degrees)
            print(degrees)

    dictionary['degrees']=degrees
    
    def extract_skills(lines):
        skill=['python', 'java', 'javascript', 'c#', 'R', 'sql', 'ruby', 'swift', 'typescript', 'kotlin', 'php', 'react', 'node.js', 
               'angular', 'vue.js', '.net', 'spring', 'django', 'flask', 'express', 'laravel', 'docker', 'kubernetes', 'aws', 'azure', 
                'google cloud', 'jenkins', 'git', 'jira', 'salesforce', 'heroku', 'postgresql', 'mongodb', 'mysql', 'oracle', 'redis', 
                'cassandra', 'elasticsearch', 'firebase', 'gile methodologies', 'devops', 'continuous integration/continuous deployment (ci/cd)', 
                'test-driven development (tdd)', 'tensorflow', 'pytorch', 'keras', 'scikit-learn', 'xgboost', 'lightgbm', 'neural networks', 'deep learning', 
                'supervised learning', 'unsupervised learning', 'natural language processing (nlp)', 'computer vision', 'reinforcement learning', 'pandas', 'numpy', 
                'matplotlib', 'seaborn', 'hadoop', 'spark', 'bigquery', 'google ai platform', 'aws sagemaker', 'azure machine learning', 'mlflow', 'tensorboard', 'git', 'svn']
        in_skill=[]
        for w in lines:
            w=w.lower()
            if w in skill:
                in_skill.append(w)
        return in_skill
    skill=[]
    for w in word_tokens:
        if w.lower()=="education":
            skill=extract_skills(word_tokens)
            #count_edu=len(skill)
            print("------",skill)

    dictionary['skill']=skill
    
    return dictionary