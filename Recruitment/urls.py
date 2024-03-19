
from django.contrib import admin
from django.urls import path,include
#from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Login.urls')),
    path('home/', include('Home.urls')),
    # path('', index),
]
