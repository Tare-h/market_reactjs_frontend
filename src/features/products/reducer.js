import { FETCH_PRODUCTS_BY_CATEGORY_ID, RECEIVE_PRODUCTS_BY_CATEGORY_ID_SUCCESS, RECEIVE_PRODUCTS_BY_CATEGORY_ID_FAILURE, FETCH_PRODUCTS_BY_CATEGORY_ID_ERROR } from './consts'

export default (
    state = { data: {}, error: null, loading: false },
    { type, data, error }
) => {
    switch (type) {
        case FETCH_PRODUCTS_BY_CATEGORY_ID:
        case FETCH_PRODUCTS_BY_CATEGORY_ID_ERROR:
            return { ...state, error: null, loading: true };
        case RECEIVE_PRODUCTS_BY_CATEGORY_ID_SUCCESS:
            {
                console.log(data);
                return { ...state, data, error: null, loading: false };
            }

        case RECEIVE_PRODUCTS_BY_CATEGORY_ID_FAILURE:
            return { ...state, data: {}, error, loading: false };
        default:
            return state;
    }
}
