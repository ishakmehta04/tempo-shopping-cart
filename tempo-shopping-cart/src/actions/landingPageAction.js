import {productData} from '../productsData';
export const FETCH_LOAD_DATA = 'FETCH_LOAD_DATA';
export const FETCH_LOAD_DATA_SUCCESS = 'FETCH_LOAD_DATA_SUCCESS'; 
export const FETCH_LOAD_DATA_FAILURE = 'FETCH_LOAD_DATA_FAILURE'; 
export const fetchProductsBegin = () => ({ 
    type: FETCH_LOAD_DATA
}); 
export const fetchProductsSuccess = products => ({ 
    type: FETCH_LOAD_DATA_SUCCESS, payload: { products } 
}); 
export const fetchProductsFailure = error => ({ 
    type: FETCH_LOAD_DATA_FAILURE, error: { error } 
});
export const fetchData = () => {
    return async (dispatch)=>{
        try {
            dispatch(fetchProductsBegin());
            dispatch(fetchProductsSuccess(productData));
        }
        catch (err){
            dispatch(fetchProductsFailure(err));
        }
    }
}