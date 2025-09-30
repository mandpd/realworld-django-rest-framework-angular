from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from config.version import __version__

class VersionTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_get_version(self):
        """Test that the version endpoint returns the correct version number."""
        url = reverse('version')
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['version'], __version__)