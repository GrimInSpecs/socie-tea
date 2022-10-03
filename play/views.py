from django.shortcuts import render
from django.http import HttpResponse

# Create your views here. 

def calc():
    x =1
    y =2 
    return x



def hello(request):
    x= calc()
    return render(request , 'hello.html' , {'name' : 'saur'})