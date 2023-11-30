from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class Address(models.Model):
    city =models.CharField(max_length=23)
    state =models.CharField(max_length=26)
    country= models.CharField(max_length=25)


class User(AbstractUser):
    phone = models.BigIntegerField()  
    address = models.ForeignKey(Address,on_delete=models.CASCADE)
    class Meta:
         db_table = "User_profile"

