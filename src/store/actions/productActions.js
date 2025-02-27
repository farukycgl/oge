import axiosInstance from "../../api/axios";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
})
  
export const setProductList = (productList) => ({
    type: SET_PRODUCT_LIST,
    payload: productList,
})
  
export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total,
})
  
export const setFetchState = (fetchState) => ({
    type: SET_FETCH_STATE,
    payload: fetchState,
})
  
export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit,
})
  
export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset,
})
  
export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
})
  
// Thunk action to fetch products
export const fetchProducts = (params = {}) => {
    return async dispatch => {
        dispatch(setFetchState("loading"));
        try {
            // URL parametrelerini oluştur
            const queryParams = new URLSearchParams();
            if (params.category) queryParams.append('category', params.category);
            if (params.sort) queryParams.append('sort', params.sort);
            if (params.filter) queryParams.append('filter', params.filter);

            const response = await axiosInstance.get(`/products?${queryParams.toString()}`);
            
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState("success"));
        } catch (error) {
            console.error("Error fetching products:", error);
            dispatch(setFetchState("error"));
        }
    };
};