from django.urls import path, include
from . import views

app_name = "grocery_app"

urlpatterns = [
    path('', views.index, name="index"),
    path('new_grocery/', views.newGrocery, name="new_grocery"),
    path('<int:pk>/delete/', views.removeGrocery, name="remove_grocery")
]
