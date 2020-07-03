import { createSelector } from 'reselect'

const getProducts = ({ products } = {}) => products;
const getProductsData = createSelector(getProducts, ({ data = {} }) => data);
export const getProductsLoading = createSelector(getProducts, ({ loading }) => loading);
export const getProductsError = createSelector(getProducts, ({ error = '' }) => error)
export const getProductsUrl = createSelector(getProductsData, ({ url = '' }) => url);
