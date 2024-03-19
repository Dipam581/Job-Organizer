
from .views import *
from django.urls import path,include

urlpatterns = [

    path('' , login_ , name="login"),
    path('register' , register , name="register"),
    path('otp/<uid>' , otp , name="otp"),
    # path('login-otp', login_otp , name="login_otp")   
    
]