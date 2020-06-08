from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('chart', views.chart, name='chart'),
    path('chart1', views.chart1, name='chart'),
    path('login',views.login, name='login'),
    path('register',views.register, name='register'),
    path('sarima_model',views.sarima_model, name='sarima_model'),
    path('future_forecast',views.future_forecast, name='future_forecast'),
    path('register',views.register, name='register'),
    path('test_table',views.test_table,name='test_table'),
]