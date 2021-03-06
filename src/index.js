import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.css"

// IF YOU WISH TO USE REACT ROUTER uncomment lines 7,19,21
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Provider is a react component which wraps your app and 'provides' your redux store to the rest of your application
import { Provider } from 'react-redux'

//function which returns store
import configureStore from './store/configureStore'

const store = configureStore()
console.log('store', store)
console.log('state', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
