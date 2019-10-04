import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormComponent from './FormComponent';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <div>
          <Route exact path="/" component={App} />
          <Route path="/details" component={FormComponent} />
      </div>
    </BrowserRouter>
  ), document.getElementById('root'))

// ReactDOM.render(
//     <div><App /></div>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
