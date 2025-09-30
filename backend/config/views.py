from rest_framework.views import APIView
from rest_framework.response import Response
from .version import __version__

class VersionView(APIView):
    def get(self, request):
        return Response({"version": __version__})