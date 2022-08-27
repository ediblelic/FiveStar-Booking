from dataclasses import field, fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from .models import Companyinfo,BackgroundImages,Hotels,Reservations,UserProfile
from django.contrib.auth.models import User
from .forms import NewUserForm
class Companyserializer(ModelSerializer):
    class Meta:
        model = Companyinfo
        fields= '__all__'
class Backgroundserializer(ModelSerializer):
    class Meta:
        model = BackgroundImages
        fields = '__all__'
class Hotelsserializer(ModelSerializer):
    class Meta:
        model = Hotels
        fields = '__all__'
class NewUserSerilzer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password","first_name"]
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
class EveryReservationSerilizer(ModelSerializer):
    class Meta:
        model = Reservations
        fields = '__all__'
class UserInformationSerilizer(ModelSerializer):
    class Meta:
        model = User
        fields = ['email']
class UserProfileSerilizer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
class UserExtendedInformationsSerilizer(ModelSerializer):
    class Meta:
        model = User
        fields = ['email','username','first_name']