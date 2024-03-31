from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import DataListView

# urlpatterns = [
#     path("", DataListView.as_view()),
#     path("<pk>", DataListView.as_view()),

# ]
jobData = DefaultRouter()

jobData.register(r'jobdata',DataListView)