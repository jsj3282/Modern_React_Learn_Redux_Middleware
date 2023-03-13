import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import rootReducer, {rootSaga} from "./modules";
import myLogger from "./middlewares/myLogger";
import {logger} from "redux-logger/src";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
    context: {
        history: customHistory
    }
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
    ReduxThunk.withExtraArgument({history: customHistory}),
    sagaMiddleware,
    logger)
));

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HistoryRouter history={customHistory}>
            <Provider store={store}><App/></Provider>
        </HistoryRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
