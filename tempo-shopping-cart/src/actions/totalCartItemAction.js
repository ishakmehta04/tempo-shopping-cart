import {productData} from '../productsData';
export const FETCH_TOTAL_CART_DATA = 'FETCH_TOTAL_CART_DATA';
export const FETCH_TOTAL_CART_SUCCESS = 'FETCH_TOTAL_CART_SUCCESS'; 
export const FETCH_TOTAL_CART_FAILURE = 'FETCH_TOTAL_CART_FAILURE'; 
export const fetchTotalCartBegin = () => ({ 
    type: FETCH_TOTAL_CART_DATA
}); 
export const fetchTotalCartSuccess = products => ({ 
    type: FETCH_TOTAL_CART_SUCCESS, payload: { products } 
}); 
export const fetchTotalCartFailure = error => ({ 
    type: FETCH_TOTAL_CART_FAILURE, error: { error } 
});
export const fetchTotalCartData = () => {
    return (dispatch)=>{
        dispatch(fetchTotalCartBegin());
        try {
            let appStorage = JSON.parse(localStorage.getItem('TEMPO_MOBILE_STORE')),
            count = Object.keys(appStorage).reduce(function (previous, key) {
                return previous + appStorage[key].currentCount;
            }, 0);

            dispatch(fetchTotalCartSuccess({
                appStorage,
                itemCount: count
            }));
        }
        catch (err){
            dispatch(fetchTotalCartFailure(err));
        }
    }
}