"""Views for configuration and system information."""

from rest_framework.response import Response
from rest_framework.views import APIView

from .version import __version__


class VersionView(APIView):
    """API endpoint that returns the current version of the application."""

    def get(self, request):
        """Return the current version of the application."""
        return Response({"version": __version__})