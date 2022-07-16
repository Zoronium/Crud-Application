
# Create your views here.
from django.shortcuts import redirect

def redirect_view(request):
    response = redirect('/api/menu/')
    return response