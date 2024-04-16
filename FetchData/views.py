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
import filetype
#from .convertforms import *
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import spacy
from spacy.matcher import Matcher
#from .skills import *
#from .imageprocess import *
#from resume_parser import resumeparse


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
            print(a)
            #dictionary=handlefile(request.FILES['file'])

#--------------------------
            
            # Return some information about the file, for example:
            return JsonResponse({'status': 'success', 'file_name': file.name, 'file_size': file.size})
        else:
            return JsonResponse({'status': 'error', 'message': 'No file received.'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST method is accepted.'})


def handle_uploaded_file(f):  
    print("to handle function")
    with open('/fetch/api/data/'+f.name, 'wb+') as destination:  
        for chunk in f.chunks():  
            destination.write(chunk)  

def handlefile(myfile):
	kind = filetype.guess('app/static/upload/'+myfile.name)
	if kind is None:
		print('Cannot guess file type!')

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

		with open('app/static/upload/'+myfile.name, 'rb') as fh:

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
	return dictionary