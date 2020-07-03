import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { FETCH_PRODUCTS_BY_CATEGORY_ID, FETCH_PRODUCTS_BY_CATEGORY_ID_ERROR } from './consts';
import { receiveProductsByCategoryIDSuccess, receiveProductsByCategoryIDFailure } from './actions';
import axios from 'axios'

function* onFetchProductsByCategoryID() {
    try {
        // API Request
        yield delay(1000)
        const response = yield call(axios.get, ['http://malls-online.com/api/v6/back/public/api/full_product_details/70']);
        yield put(receiveProductsByCategoryIDSuccess(response.data));
    } catch (e) {
        yield put(receiveProductsByCategoryIDFailure('There was a problem fetching a cat.'));
    }
}
export function* onProductsByCategoryIDError() {
    try {
        // API Request
        yield delay(1000)
        const headerParams = {
            "Access-Control-Allow-Origin": "*"
        };
        const response = yield call(axios.get, ['http://localhost:8000/api/category/35']);
        yield put(receiveProductsByCategoryIDSuccess(response.data));
    } catch (e) {
        yield put(receiveProductsByCategoryIDFailure('There was a problem fetching a cat.'));
    }
}

export function* fetchProductsByCategoryIDSaga() {
    yield takeLatest(FETCH_PRODUCTS_BY_CATEGORY_ID, onFetchProductsByCategoryID);
}

export function* fetchProductsByCategoryIDErrorSaga() {
    yield takeLatest(FETCH_PRODUCTS_BY_CATEGORY_ID_ERROR, onProductsByCategoryIDError);
}
