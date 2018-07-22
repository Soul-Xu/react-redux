import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Main from './Component/Main';
import Compose from './Component/Compose';
import './Component/js/flexible';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/compose" component={Compose} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>), 
    document.getElementById('root'));

