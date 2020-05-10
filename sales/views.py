# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse
import json
import pandas as pd
import numpy as np
import datetime 
import statsmodels.api as sm
from statsmodels.tsa.statespace.sarimax import SARIMAX
import time
import itertools


def index(request):
    """ view function for sales app """

    # read data                                                                                                  
	
    df = pd.read_csv("sales/data/Car_sales.csv")
    rs = df.groupby("Engine size")["Sales in thousands"].agg("sum")
    categories = list(rs.index)
    values = list(rs.values)
    table_content = df.to_html(index=None)
    table_content = table_content.replace("","")
    table_content = table_content.replace('class="dataframe"',"class='table table-striped'")
    table_content = table_content.replace('border="1"',"")
	
    context = {"categories": categories, 'values': values, 'table_data':table_content}
    return render(request, 'index.html', context=context)

def time_unix(a: datetime):
    return int(time.mktime(a.timetuple())*1000)

def chart(request):
    df=pd.read_csv('sales/data/IPG3113N.csv',index_col=0)
    train_df=df[df.index <= '2018-12-01']
    test_df=df[df.index > '2018-12-01']
    test_dict = {}
    test_dict["test"]=test_df.values.tolist()
    test_dict["predict"]=(test_df.values +2).tolist()
    # jsonFile = train_df.to_json(orient="index")
    context = {"data":json.dumps(test_dict), "aa":"hihi","haha":"hahahaha"}
    return render(request,'indexpro.html',context=context)
    # return JsonResponse(test_dict)
# def football(request):
#     df = pd.read_csv("sales/data/final_Kmeans.csv")
#     json_test = df[['x','y','name','cluster','club']].groupby('cluster').apply(lambda x: x.to_json(orient='records'))

def chart1(request):
    df=pd.read_csv('sales/data/IPN31152N.csv',index_col=0)
    df.index = pd.date_range(start='1972-01-01', end='2020-01-01', freq='M')
    train_df=df[df.index <= '2017-12-31']
    test_df=df[df.index > '2017-12-31']
    # model1 = SARIMAX(train_df['IPN31152N'],order=(3,1,3),seasonal_order=(0,1,1,12)).fit()
    # pred = model1.predict(start=len(train_df),end=len(train_df)+len(test_df)-1,type='levels')
    # df_pred=pd.DataFrame(pred)
    # df_pred.columns=['IPN31152N']
    # results = {'test': [[time_unix(test_df.index[i]),test_df.iloc[i]['IPN31152N']] for i in range(0,len(test_df)-1)], 'predict': [[time_unix(df_pred.index[i]),df_pred.iloc[i]['IPN31152N']] for i in range(0,len(df_pred)-1)]}
    
    grouped_df = df[df.index.year >= 2015].groupby(df[df.index.year >= 2015].index.year)
    re = {}
    # for key, item in grouped_df:
    #     re[str(key)] = grouped_df.get_group(key).values.tolist()
    for key, item in grouped_df:
    #print(item)
        re[str(key)] = [[[round(num[0],2)] for num in grouped_df.get_group(key).values.tolist()]]
        if key == 2015:
            re[str(key)].append([[round(num[0], 2)] for num in (grouped_df.get_group(key).values-df.groupby(df.index.year).get_group(2014).values)])
        else:
            re[str(key)].append([[round(num[0], 2)] for num in (grouped_df.get_group(key).values-grouped_df.get_group(key-1).values)])

    
    df_pie = df[df.index.year == 2019]
    df_pie_sum=df_pie.sum()[0]
    df_pie_result = df_pie.apply(lambda x: (x/df_pie_sum)*100).values.tolist()

    # context = {"data":json.dumps(results), "result_5y":json.dumps(re),"pie_result":json.dumps(df_pie_result)}
    context = {"result_5y":json.dumps(re),"pie_result":json.dumps(df_pie_result)}
    return render(request,'indexpro.html',context=context)

def login(request):
    return render(request,'login.html')

def register(request):
    return render(request,'register.html')


def measure_metric(y, yhat):
  e = y-yhat
  mape=np.abs(np.mean(e/y))
  return mape
def sarima_model(request):
    df=pd.read_csv('sales/data/IPN31152N.csv',index_col=0)
    df.index = pd.date_range(start='1972-01-01', end='2020-01-01', freq='M')
    train_df=df[df.index <= '2017-12-31']
    test_df=df[df.index > '2017-12-31']
    model1 = SARIMAX(train_df['IPN31152N'],order=(3,1,3),seasonal_order=(0,1,1,12)).fit()
    pred = model1.predict(start=len(train_df),end=len(train_df)+len(test_df)-1,type='levels')
    df_pred=pd.DataFrame(pred)
    df_pred.columns=['IPN31152N']
    results = {'test': [[time_unix(test_df.index[i]),test_df.iloc[i]['IPN31152N']] for i in range(0,len(test_df))], 'predict': [[time_unix(df_pred.index[i]),df_pred.iloc[i]['IPN31152N']] for i in range(0,len(df_pred))]}
    re = {}
    re['2018'] = [round(measure_metric(test_df['IPN31152N'][:12].values,df_pred['IPN31152N'][:12])*100,2)]
    re['2019'] = [round(measure_metric(test_df['IPN31152N'][-12:].values,df_pred['IPN31152N'][-12:])*100,2)]
    context = {"data":json.dumps(results),'mape':json.dumps(re)}
    return render(request,'charts_model.html',context=context)

def future_forecast(request):
    df=pd.read_csv('sales/data/IPN31152N.csv',index_col=0)
    df.index = pd.date_range(start='1972-01-01', end='2020-01-01', freq='M')
    train_df=df[df.index <= '2017-12-31']
    test_df=df[df.index > '2017-12-31']
    model1 = SARIMAX(train_df['IPN31152N'],order=(3,1,3),seasonal_order=(0,1,1,12)).fit()
    pred = model1.get_prediction(start='2020-01-31',end='2020-12-31')
    df_pred=pd.DataFrame(pred.predicted_mean)
    df_pred.columns=['IPN31152N']
    results = {'2020': [[time_unix(df_pred.index[i]),df_pred.iloc[i]['IPN31152N']] for i in range(0,len(df_pred))]}
    re={}
    re['2020']=[[[round(i,2)] for i in pred.predicted_mean]]
    re['2020'].append([[round(i,2)] for i in  np.array([round(i,2) for i in pred.predicted_mean]) - np.array([i for i in df[df.index.year == 2019]['IPN31152N']])])
    context = {"data":json.dumps(results),"result_changes":json.dumps(re)}
    return render(request,'charts_forecast.html',context=context)





