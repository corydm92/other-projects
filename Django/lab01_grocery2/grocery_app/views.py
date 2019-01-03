from django.shortcuts import render
from .models import GroceryItem
from django.urls import reverse
from django.http import HttpRequest, HttpResponse, HttpResponseRedirect

def index(request):
    grocery_items = GroceryItem.objects.all()
    context = {
        'grocery_items': grocery_items,
    }
    return render(request, 'grocery_app/index.html', context)

def newGrocery(request):
    new_item = request.POST["new-grocery"]
    item = GroceryItem.objects.create(item=new_item)

    return HttpResponseRedirect(reverse('grocery_app:index'))

def removeGrocery(request, pk):
    remove_item = GroceryItem.objects.get(pk=pk)
    remove_item.delete()

    return HttpResponseRedirect(reverse('grocery_app:index'))
