from enum import unique
from tkinter.tix import Tree
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Companyinfo(models.Model):
    email = models.CharField(null=True,max_length=(30))
    addres = models.CharField(null=True,max_length=(30))
    phoneNum = models.CharField(null=True,max_length=(30))
    def __str__(self):
        return self.email
    def __str__(self):
        return self.addres
    def __str__(self) :
        return self.phoneNum
class BackgroundImages(models.Model):
    picture1 = models.CharField(null=True,max_length=(500))
    picture2 = models.CharField(null=True,max_length=(500))
    picture3 = models.CharField(null=True,max_length=(500))
    def __str__(self):
        return self.picture1
    def __str__(self):
        return self.picture2
    def __str__(self) :
        return self.picture3
class Hotels(models.Model):
    title = models.CharField(max_length=30,null=True)
    description = models.CharField(max_length=250)
    frimg = models.CharField(null=True,max_length=400)
    sdimg = models.CharField(null=True,max_length=400)
    thimg = models.CharField(null=True,max_length=400)
    ftimg = models.CharField(max_length=400)
    amenities = models.CharField(max_length=300)
    price = models.IntegerField(null=True)
    numofpeople = models.IntegerField(null=True)
    def __str__(self):
        return self.title
class Reservations(models.Model):
    current_user =  models.ForeignKey(User,default=None,on_delete=models.CASCADE)
    current_hotel = models.ForeignKey(Hotels,default=None,on_delete=models.CASCADE)
    checkin =  models.DateField(default=None)
    checkout = models.DateField(default=None)
    def __str__(self):
        return f'{self.current_user} has booked {self.current_hotel}'
class UserProfile(models.Model):
    client       = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    phone        = models.CharField(max_length=200, unique=True, null=True)
    profile_pic  = models.ImageField(default='default.png', null=True, blank=True, upload_to='profile_images')
    bio          = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f'{self.client.username} Profile'