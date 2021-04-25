#Django form
## Use case 1
### Description
We are building an ecommerce website, the first thing we need to do is to allow customer
to register an account on our site.
Only two info needs to be captured for every new customer:
1. Name
2. Email

### Design
#### Model
A simple model with two fields:
Name
Email
#### Form
Form that also has two fields:
Name
Email
#### View
A view function to get the form and display using a template
This view needs to handle GET and POST request.
At first, the GET request will show a blank form for the customer to input
POST request is to create new customer.
Then the GET request is also used for viewing existing customer.
#### Template
One template that use for both input and view.


