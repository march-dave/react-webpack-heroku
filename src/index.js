import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/app'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

import './styles/app.scss'




const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('main');
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="login" component={Login}/>
                <Route path="register" component={Register}/>
                <Route path="wall/:username" component={Wall}/>
            </Route>
        </Router>
    </Provider>, rootElement
);

