import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/reset.css'
import './App.css'
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'
import filters from './filters'
import store from './store'
React.Component.prototype.$axios = axios
React.Component.prototype.$filters = filters
axios.interceptors.request.use(config => {
    config.url = '/hbb' + config.url
    return config
})
axios.interceptors.response.use(({data}) => {
    return data
})
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <Router>
            <App/>
        </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
