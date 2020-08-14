import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/index.css';
import './styles/App.css';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {API_ROOT, GITHUB_ACCESS_KEY} from "./containers/App/constants";

const client = new ApolloClient({
  uri: API_ROOT,
  headers: {
    Authorization: `bearer ${GITHUB_ACCESS_KEY}`,
  },
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
