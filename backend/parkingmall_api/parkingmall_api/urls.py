
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('parkingmall.urls')),
    path('auth/', obtain_auth_token),

]
