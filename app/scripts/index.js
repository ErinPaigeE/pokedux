import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import pokemonApp from './reducers'
import App from './components/App'
require('../styles/main.scss');
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../assets/', true, /\.png$|\.svg$/));

const middleware = applyMiddleware(promise(), thunk, logger())
let store = createStore(pokemonApp, middleware);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
