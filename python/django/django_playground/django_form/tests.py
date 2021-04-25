from django.test import TestCase

# Create your tests here.

class TestCustomerForm(TestCase):

    def test_customer_form_use_correct_template(self):
        response = self.client.get('/customer/new')

        self.assertTemplateUsed(response, 'django_form\customer_new.html')
