from rest_framework import routers
from .api import DiaryList

router = routers.DefaultRouter()
router.register('api/diaries', DiaryList, 'diaries')

urlpatterns = router.urls