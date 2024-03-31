from django.db import models

# Create your models here.
class Data(models.Model):
    company = models.CharField(max_length = 100,blank = True)
    designation = models.CharField(max_length = 100,blank = True)
    description = models.CharField(max_length = 100,blank = True)
    skill = models.CharField(max_length = 100,blank = True)
    yoe = models.IntegerField()
    salary = models.IntegerField()
    mail = models.TextField(max_length = 100,blank = True)

def __str__(self):
    return self.company

class Meta:
    db_table = "Hiring_Details"
