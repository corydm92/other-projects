from django.db import models

class GroceryItem(models.Model):
    item = models.CharField(max_length=30)

    def __str__(self):
        return self.item
