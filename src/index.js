import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import store from './store'


const appRender = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>

    )
}


ReactDOM.render(appRender(), document.getElementById('root'));