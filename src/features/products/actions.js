import { FETCH_PRODUCTS_BY_CATEGORY_ID, RECEIVE_PRODUCTS_BY_CATEGORY_ID_SUCCESS, RECEIVE_PRODUCTS_BY_CATEGORY_ID_FAILURE, FETCH_PRODUCTS_BY_CATEGORY_ID_ERROR } from './consts'

export const fetchProductsByCategoryID = () => ({
    type: FETCH_PRODUCTS_BY_CATEGORY_ID,
});

export const fetchProductsByCategoryIDError = () => ({
    type: FETCH_PRODUCTS_BY_CATEGORY_ID_ERROR,
});

export const receiveProductsByCategoryIDSuccess = (data) => ({
    type: RECEIVE_PRODUCTS_BY_CATEGORY_ID_SUCCESS,
    data,
});

export const receiveProductsByCategoryIDFailure = (error) => ({
    type: RECEIVE_PRODUCTS_BY_CATEGORY_ID_FAILURE,
    error,
});
