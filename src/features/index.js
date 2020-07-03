import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import products from './products/reducer';
import { fetchProductsByCategoryIDSaga, fetchProductsByCategoryIDErrorSaga } from './products/sagas';

function* saga() {
    yield all([
        fetchProductsByCategoryIDSaga(),
        fetchProductsByCategoryIDErrorSaga(),
    ]);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    products,
});

export default createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(saga);
