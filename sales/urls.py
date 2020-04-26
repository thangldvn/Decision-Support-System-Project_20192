from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('chart', views.chart, name='chart'),
    path('chart1', views.chart1, name='chart'),
    path('login',views.login, name='login'),
    path('register',views.register, name='register'),
]