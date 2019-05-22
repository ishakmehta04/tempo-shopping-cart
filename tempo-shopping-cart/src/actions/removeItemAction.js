import {productData} from '../productsData';
export const FETCH_REMOVE_FROM_CART_DATA = 'FETCH_REMOVE_FROM_CART_DATA';
export const FETCH_REMOVE_FROM_CART_SUCCESS = 'FETCH_REMOVE_FROM_CART_SUCCESS'; 
export const FETCH_REMOVE_FROM_CART_FAILURE = 'FETCH_REMOVE_FROM_CART_FAILURE'; 
export const fetchRemoveItemBegin = () => ({ 
    type: FETCH_REMOVE_FROM_CART_DATA
}); 
export const fetchRemoveItemSuccess = products => ({ 
    type: FETCH_REMOVE_FROM_CART_SUCCESS, payload: { products } 
}); 
export const fetchRemoveItemFailure = error => ({ 
    type: FETCH_REMOVE_FROM_CART_FAILURE, error: { error } 
});
export const fetchRemoveItem = (index) => {
    return (dispatch)=>{
        dispatch(fetchRemoveItemBegin());
        try {
            
            let appStorage = JSON.parse(localStorage.getItem('TEMPO_MOBILE_STORE')),
            tempObj={};

            if(appStorage) {
              let filterResult = Object.keys(appStorage).filter((value, i) =>{
                return value != `PHONE_INDEX_${index}`;
              });

              filterResult.forEach((value)=>{
                tempObj[value] = appStorage[value];
              });

              localStorage.setItem(`TEMPO_MOBILE_STORE`, JSON.stringify(tempObj))
            }

            dispatch(fetchRemoveItemSuccess({'success': true}));
        }
        catch (err){
            dispatch(fetchRemoveItemFailure(err));
        }
    }
}