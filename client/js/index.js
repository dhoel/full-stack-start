import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CheeseList from './components/cheese-list';
import store from './store';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
      <Provider store={store}>
        <CheeseList />
      </Provider>,
        document.getElementById('app')
    )
);
