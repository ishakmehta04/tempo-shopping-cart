import {productData} from '../productsData';
export const FETCH_OVERLAY_DATA = 'FETCH_OVERLAY_DATA';
export const FETCH_OVERLAY_DATA_SUCCESS = 'FETCH_OVERLAY_DATA_SUCCESS'; 
export const FETCH_OVERLAY_DATA_FAILURE = 'FETCH_OVERLAY_DATA_FAILURE'; 
export const fetchOverlayBegin = () => ({ 
    type: FETCH_OVERLAY_DATA
}); 
export const fetchOverlaySuccess = products => ({ 
    type: FETCH_OVERLAY_DATA_SUCCESS, payload: { products } 
}); 
export const fetchOverlayFailure = error => ({ 
    type: FETCH_OVERLAY_DATA_FAILURE, error: { error } 
});
export const fetchOverlayData = (index) => {
    return (dispatch)=>{
        dispatch(fetchOverlayBegin());
        try {
            let result = {}
            if(index){
                productData.forEach(function (item) {
                    if(item.id == index){
                        // Populate '.preview-large' with the chosen product's data.
                        result.name = item.name;
                        result.image = item.image.large;
                        result.description = item.description;
                    }
                });
                dispatch(fetchOverlaySuccess(result));
            }else {
                dispatch(fetchOverlayFailure(''));
            }
            
        }
        catch (err){
            dispatch(fetchOverlayFailure(err));
        }
    }
}