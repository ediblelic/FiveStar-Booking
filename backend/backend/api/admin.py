from django.contrib import admin
from api.forms import NewUserForm
# Register your models here.
from .models import Companyinfo,BackgroundImages,Hotels,Reservations,UserProfile
admin.site.register(Companyinfo)
admin.site.register(BackgroundImages)
admin.site.register(Hotels)
admin.site.register(Reservations)
admin.site.register(UserProfile)
