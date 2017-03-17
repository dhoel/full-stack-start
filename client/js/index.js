import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CheeseList from './components/cheese-list';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(

            <CheeseList cheese={['Bath Blue', 'Barkham Blue', 'Buxton Blue']}/>,

        document.getElementById('app')
    )
);
console.log(`Client running in ${process.env.NODE_ENV} mode`);
