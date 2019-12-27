import React from 'react';
import ReactDOM from 'react-dom';
import Client from 'services/api';
import { ApolloProvider } from '@apollo/react-hooks';
import 'antd/dist/antd.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const Init = () => (
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<Init />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
