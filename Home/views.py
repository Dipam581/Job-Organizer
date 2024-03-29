from django.shortcuts import render
from django.http import HttpResponse
import requests
from bs4 import BeautifulSoup
from django.http import JsonResponse

# Create your views here.

def srapper():
    url = 'https://www.linkedin.com/jobs/search/?currentJobId=3848210393&f_C=1441%2C1035%2C2553488%2C9215331%2C1353%2C9390173%2C1318%2C1680%2C3477522%2C1060%2C2017&f_E=4&geoId=102713980&keywords=software%20engineer&location=India&origin=JOB_SEARCH_PAGE_JOB_FILTER&refresh=true&sortBy=R&spellCorrectionEnabled=true'
    headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'}
    r = requests.get(url,headers)
    soup = BeautifulSoup(r.content,'lxml')
    return soup

#print(srapper())

all = []
def extract(soup):
    jobs = soup.find_all('div',class_ = 'base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card')
    print(len(jobs))

    for items in jobs:
        title = items.find('a').text.strip()
        company = items.find("h4").text.strip()
        link = items.a['href']
        location = items.find('span',class_= 'job-search-card__location').text.strip()
        hiring_type = items.find('span',class_= 'job-posting-benefits__text')
        if(hiring_type is not None):
            hiring_type = hiring_type.text.strip()
        
        posted = items.find('time',class_= 'job-search-card__listdate')
        if(posted is not None):
            time = posted.text.strip()
            
            if("week" in time):
                timeId = int(time[0]) * 7
            elif("month" in time):
                timeId = int(time[0]) * 30
            else:
                timeId = time[0]
        
        job = {
                "Title" : title,
                "Company" : company,
                "Link" : link,
                "Hiring_type" : hiring_type,
                "Location" : location,
                "Time_of_Post" : time,
                "timeId" : timeId,
            }
        # print(job)
        all.append(job)

# Fetch jobs for remote locations from linkedin --> Start
def srapper_remote():
    url = 'https://www.linkedin.com/jobs/search?keywords=Python%20Django%20Developer&location=India&f_WT=2&position=10&pageNum=0'
    headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'}
    r = requests.get(url,headers)
    soup = BeautifulSoup(r.content,'lxml')
    return soup

remoteJob = []
go = []

def extract_remote(soup):
    jobs = soup.find_all('div',class_ = 'base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card')
    print(len(jobs))

    for items in jobs:
        title = items.find('a').text.strip()
        company = items.find("h4").text.strip()
        link = items.a['href']
        location = items.find('span',class_= 'job-search-card__location').text.strip()
        hiring_type = items.find('span',class_= 'job-posting-benefits__text')
        if(hiring_type is not None):
            hiring_type = hiring_type.text.strip()
        
        posted = items.find('time',class_= 'job-search-card__listdate')
        if(posted is not None):
            time = posted.text.strip()
            
            if("week" in time):
                timeId = int(time[0]) * 7
            elif("month" in time):
                timeId = int(time[0]) * 30
            else:
                timeId = time[0]
        
        job = {
                "Title" : title,
                "Company" : company,
                "Link" : link,
                "Hiring_type" : hiring_type,
                "Location" : location,
                "Time_of_Post" : time,
                "timeId" : timeId,
            }
        # print(job)
        remoteJob.append(job)
# Fetch jobs for remote locations from linkedin --> End
        

def Home(request):
    srapper_ = srapper()
    jobData = extract(srapper_)

    srapper_remote_job = srapper_remote()
    jobData_remote = extract_remote(srapper_remote_job)
    

    sorted_data = sorted(all, key=lambda x: int(x['timeId']))
    sorted_remote_job = sorted(remoteJob, key=lambda x: int(x['timeId']))

    locationSet = []
    companySet = []
    for key in sorted_data:
        for value in key:
            
            if(value == "Location"):
                loc = key[value].split(",")[0]
                if (loc not in locationSet):
                    locationSet.append(loc)

            if(value == "Company"):
                comp = key[value].split(",")[0]
                if (comp not in companySet):
                    companySet.append(comp)


    print(locationSet)
    # return render(request, 'index.html', {
    #     'jobs' : sorted_data,
    #     'remoteJob' : sorted_remote_job,
    #     'locationSet' : locationSet,
    #     'companySet' : companySet
    #     })

    data = {
        'jobs': sorted_data,
        'remoteJob': sorted_remote_job,
        'locationSet': locationSet,
        'companySet': companySet
    }

    # Returning JSON response
    return JsonResponse(data)