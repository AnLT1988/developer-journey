from django.shortcuts import render

# Create your views here.

def new_customer(request):
    return render(request, 'django_form\customer_new.html')
