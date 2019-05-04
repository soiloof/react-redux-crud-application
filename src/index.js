import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from 'redux-devtools-extension'
import { from } from 'rxjs';
import { id } from 'postcss-selector-parser';
//import { from } from 'rxjs';
const enhancer = process.env.NODE_ENV === 'development'?
    composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk)
const store = createStore(reducer,enhancer)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route  path="/events/new" component={EventsNew}/>
                <Route exact path="/" component={EventsIndex}/>
                <Route  path="/events/:id" component={EventsShow}/>
                <Route exact path="/events" component={EventsIndex}/>
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
