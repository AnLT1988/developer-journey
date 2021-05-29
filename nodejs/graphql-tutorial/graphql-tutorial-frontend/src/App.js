import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import { Component } from 'react';

import AddBook from './components/AddBook';
import BookList from './components/BookList';
import './index.css'

const apolloClient = new ApolloClient({
  cache: new InMemoryCache({}),
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div id="main">
          <h1>Hello React</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    )
  }
}

export default App