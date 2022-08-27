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
    path('email/<str:pk>/', views.get_user_email, name='get_user_email'),
    path('email/<str:email>/username/<str:username>', views.send_welcome_mail, name='send_welcome_mail'),
    path('email/<str:email>/username/<str:username>/de', views.send_welcome_mail_de, name='send_welcome_mail_de'),
    path('userprofile/<int:pk>', views.user_profile, name='user_profile'),
    path('user/profile/<str:pk>/infos', views.user_profile_extended, name='user_profile_extended')


]