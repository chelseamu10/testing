import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
import abc from './abc';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={abc} />
        </Switch>
      </BrowserRouter>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
