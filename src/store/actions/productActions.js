import axiosInstance from "../../api/axios";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
export const SET_PRODUCT_LOADING = "SET_PRODUCT_LOADING";

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
  
export const setSelectedProduct = (product) => ({
    type: SET_SELECTED_PRODUCT,
    payload: product,
});

export const setProductLoading = (isLoading) => ({
    type: SET_PRODUCT_LOADING,
    payload: isLoading,
});

// Thunk action to fetch products
export const fetchProducts = (params = {}) => {
    return async dispatch => {
        dispatch(setFetchState("loading"));
        try {
            const queryParams = new URLSearchParams();
            // Pagination parametreleri
            queryParams.append('limit', params.limit || 24);
            queryParams.append('offset', params.offset || 0);
            // Diğer filtreler
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

// Tekil ürün getirme için thunk action
export const fetchProductById = (productId) => {
    return async dispatch => {
        dispatch(setProductLoading(true));
        try {
            const response = await axiosInstance.get(`/products/${productId}`);
            dispatch(setSelectedProduct(response.data));
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            dispatch(setProductLoading(false));
        }
    };
};