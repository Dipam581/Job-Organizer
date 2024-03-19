from django.shortcuts import render , redirect

from django.contrib.auth.models import User

from .models import Profile
from .helper import MessageHandler
import random

import http.client

from django.conf import settings
from django.contrib.auth import authenticate, login


def login_(request):
    if request.method == "POST":
        userName = request.POST.get('userName')
        phone_number = request.POST.get('phone_number')
        check_profile = Profile.objects.filter(phone_number = phone_number).first()
        profile = Profile.objects.filter(phone_number = phone_number).first()
        if profile is None:
            return redirect('/register')

        
        print("from login-otp",profile.otp)

        #user = User.objects.create_user(username=userName)
        # user.save()

        otp_ = str(random.randint(1000 , 9999))
        profile.otp = otp_

        print("after login-otp",profile.otp)
        # profile = Profile(user = user , phone_number = phone_number , otp = otp) 
        profile.save()
        msg_handler = MessageHandler(phone_number, otp_ ).send_otp_via_message()
        return redirect(f'/otp/{profile.uid}')

        # if not profile.exists():
        #     return redirect('/register')

        # profile[0].otp = random.randint(1000,9999)
        # profile.save()


        # username = userName
        # user = User.objects.create_user(username=username, email=email, first_name=name)
        # user.save()
        # otp = str(random.randint(1000 , 9999))
        # profile = Profile(user = user , mobile=mobile , otp = otp) 
        # profile.save()
        # send_otp(mobile, otp)


        # msg_handler = MessageHandler(phone_number, profile.otp ).send_otp_via_message()
        # return redirect(f'/otp/{profile.uid}')


    return render(request, 'login.html')


def register(request):
    if request.method == "POST":
        
        username = request.POST.get("name")
        phone_number = request.POST.get("mobile")
        
        username = username.split(' ')[0]
        print("from register, username", username)
        user = User.objects.create(username = username)
        print("-----------",user)

        profile = Profile.objects.create(user = user, phone_number = phone_number)

        return redirect('/')
    
    return render(request, 'register.html')


def otp(request,uid):
    if request.method == "POST":
        otp = request.POST.get('otp')
        profile = Profile.objects.get(uid = uid)
        print("in otp form",profile.otp,)

        if otp == profile.otp:
            login(request,profile.user)
            return redirect('/home')
        
        return redirect(f'/otp/{uid}')
        

    return render(request,'otp.html')