from http.client import BAD_REQUEST
from smtplib import SMTPRecipientsRefused
from urllib import response
from urllib.error import HTTPError
from django import views
from django.http import Http404, HttpResponse, JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from yaml import serialize
from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Companyinfo, BackgroundImages, Hotels, Reservations
from .serializers import Companyserializer,Backgroundserializer, EveryReservationSerilizer,Hotelsserializer, NewUserSerilzer,UserInformationSerilizer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.conf import settings
from django.core.mail import send_mail
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
@api_view(['GET'])
def getInfos(request):
    company_infos = Companyinfo.objects.all()
    serialize = Companyserializer(company_infos,many=True)
    return Response(serialize.data)
@api_view(['GET'])
def getPictures(request):
    pictures = BackgroundImages.objects.all()
    serialize = Backgroundserializer(pictures,many=True)
    return Response(serialize.data)
@api_view(['GET'])
def getHotels(request):
    hotels = Hotels.objects.all()
    serialize = Hotelsserializer(hotels,many=True)
    return Response(serialize.data)
@api_view(['GET'])
def getHotel(request,pk):
    hotels = Hotels.objects.get(id=pk)
    serialize = Hotelsserializer(hotels,many=False)
    return Response(serialize.data)
@api_view(['POST'])
def reguser(request):
    serialize = NewUserSerilzer(data=request.data,)
    if serialize.is_valid():
        serialize.save()
        return Response({"User was": "Created"})
    return Response({"INFORMATION": "INVALID","OR USER ALREADY":"EXIST"},status=BAD_REQUEST)

@api_view(['POST'])
def make_resservation(request):
    serialize = EveryReservationSerilizer(data=request.data,)
    if serialize.is_valid():
        serialize.save()
        return Response({"Reservation was": "Created"})
    return Response({"INFORMATION": "INVALID","OR RESERVATION ALREADY":"EXIST"},status=BAD_REQUEST)

@api_view(['GET'])
def seereservations(request):
    reservations = Reservations.objects.all()
    serialize = EveryReservationSerilizer(reservations,many=True)
    return Response(serialize.data)
@api_view(['GET'])
def get_user_email(request,pk):
    user_email = User.objects.get(id=pk)
    serialize = UserInformationSerilizer(user_email, many=False) 
    try:
        return Response(serialize.data)
    except Http404:
        return Response({'email':''})
@api_view(['GET'])
def send_welcome_mail(request,email,username):
    subject = 'FIVE-STAR BOOKING'
    message = f'Hi {username}, You have successfully booked, thank You for using our site'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email, ]
    send_mail( subject, message, email_from, recipient_list )
    try:
        return Response({'Email':'Send'})
    except SMTPRecipientsRefused :
        return Response({'Email':'ISNT GOOD'})
@api_view(['GET'])
def send_welcome_mail_de(request,email,username):
    subject = 'FIVE-STAR BOOKING'
    message = f'Hallo {username}, Sie haben erfolgreich gebucht. Vielen Dank, dass Sie unsere Seite nutzen'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email, ]
    send_mail( subject, message, email_from, recipient_list )
    try:
        return Response({'Email':'Send'})
    except SMTPRecipientsRefused :
        return Response({'Email':'ISNT GOOD'})
