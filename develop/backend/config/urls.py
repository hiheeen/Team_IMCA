"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.conf import settings

schema_view = get_schema_view(
    openapi.Info(
        title="IMCA",
        default_version="프로젝트 버전: v1",
        description="IMCA API명세서",
        terms_of_service="https://www.google.com/policies/terms/",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    # path(r'swagger(?P<format>\.json|\.yaml)', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    # path(r'swagger', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    # path(r'redoc', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc-v1'),
    ## 아래서부터 우리거
    path("admin/", admin.site.urls),
    path("api/v1/users/", include("users.urls")),
    # path("api/v1/reviews/", include("reviews.urls")),
    # path("api/v1/reviews_reviews/", include("reviews_reviews.urls")),
    path("api/v1/youtube_videos/", include("youtube_videos.urls")),
    path("API/", include("apis.urls")),
    # path("api/v1/reports/", include("reports.urls")),
]
if settings.DEBUG:
    urlpatterns += [
        re_path(
            r"^swagger(?P<format>\.json|\.yaml)$",
            schema_view.without_ui(cache_timeout=0),
            name="schema-json",
        ),
        re_path(
            r"^swagger/$",
            schema_view.with_ui("swagger", cache_timeout=0),
            name="schema-swagger-ui",
        ),
        re_path(
            r"^redoc/$",
            schema_view.with_ui("redoc", cache_timeout=0),
            name="schema-redoc",
        ),
    ]
