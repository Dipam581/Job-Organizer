from django.urls import path
from .views import receive_data,send_data

urlpatterns = [
    path('api/data/', receive_data, name='receive_data'),
    path('api/data/send', send_data, name='send_data'),

]
