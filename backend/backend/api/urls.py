from django.urls import path, include
from . import views

from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns =[
    path('infos',views.getInfos,name='getinfos'),
    path('pictures',views.getPictures,name='getPictures'),
    path('hotels',views.getHotels,name='getHotels'),
    path('hotels/<str:pk>',views.getHotel,name='getHotel'),
    path('token', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('register', views.reguser,name="reguser" ),
    path('reserv/',views.make_resservation,name='make_resservation'),
    path('allres',views.seereservations,name='allres'),


]