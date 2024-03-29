import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const apiKey = process.env.REACT_APP_API_KEY;

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/" + apiKey + "/master"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();