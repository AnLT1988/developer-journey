schema

# root query
Is the entry point to the graph
The root query is to define all posible queries supported by the server.

# mutation
A special kind of GraphQLObjectType (a convention) for request to create data.
From the outside, it's exactly the same as a query. The difference is that on the server,
we will handle this query to insert/delete data.