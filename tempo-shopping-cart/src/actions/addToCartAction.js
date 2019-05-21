import {productData} from '../productsData';
export const FETCH_ADD_TO_CART_DATA = 'FETCH_ADD_TO_CART_DATA';
export const FETCH_ADD_TO_CART_SUCCESS = 'FETCH_ADD_TO_CART_SUCCESS'; 
export const FETCH_ADD_TO_CART_FAILURE = 'FETCH_ADD_TO_CART_FAILURE'; 
export const fetchAddToCartBegin = () => ({ 
    type: FETCH_ADD_TO_CART_DATA
}); 
export const fetchAddToCartSuccess = products => ({ 
    type: FETCH_ADD_TO_CART_SUCCESS, payload: { products } 
}); 
export const fetchAddToCartFailure = error => ({ 
    type: FETCH_ADD_TO_CART_FAILURE, error: { error } 
});
export const fetchAddToCartData = (index) => {
    return (dispatch)=>{
        dispatch(fetchAddToCartBegin());
        try {
            let phoneObj = {};
            productData.forEach(function (item) {
                if(item.id == index){
                    phoneObj= item;
                }
            });
            let appStorage = JSON.parse(localStorage.getItem('TEMPO_MOBILE_STORE'));
            if(appStorage) {
                if(appStorage.hasOwnProperty(`PHONE_INDEX_${index}`)){
                    let item = appStorage[`PHONE_INDEX_${index}`];
                    item.currentCount++;
                    appStorage[`PHONE_INDEX_${index}`] = item
                    localStorage.setItem(`TEMPO_MOBILE_STORE`, JSON.stringify(appStorage));
                } else {
                    let tempObj = phoneObj;
                tempObj['currentCount'] = 1;
                let obj = {}
                obj[`PHONE_INDEX_${index}`] = tempObj;
                let mergedObj = Object.assign({},appStorage, obj)
                localStorage.setItem(`TEMPO_MOBILE_STORE`, JSON.stringify(mergedObj));
                }
            } else {
                let tempObj = phoneObj;
                tempObj['currentCount'] = 1;
                let obj = {}
                obj[`PHONE_INDEX_${index}`] = tempObj;
                localStorage.setItem(`TEMPO_MOBILE_STORE`, JSON.stringify(obj));
            }

            dispatch(fetchAddToCartSuccess({'success': true}));
        }
        catch (err){
            dispatch(fetchAddToCartFailure(err));
        }
    }
}