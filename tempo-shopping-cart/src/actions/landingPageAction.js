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
export const fetchData = (filters) => {
    return (dispatch)=>{
        dispatch(fetchProductsBegin());
        try {
            if(Object.keys(filters).length == 0) {
                dispatch(fetchProductsSuccess(productData));
            } else {
                const criteria = ['manufacturer','storage','os','camera'];
			    let results = [],
                    isFiltered = false,
                    prodData = productData;
                    
                    criteria.forEach(function (c) {
                        if(filters[c] && filters[c].length){
                            if(isFiltered){
                                prodData = results;
                                results = [];
                            }
                            filters[c].forEach(function (filter) {
                                prodData.forEach(function (item){
                                    if(typeof item.specs[c] == 'number'){
                                        if(item.specs[c] == filter){
                                            results.push(item);
                                            isFiltered = true;
                                        }
                                    }

                                    if(typeof item.specs[c] == 'string'){
                                        if(item.specs[c].toLowerCase().indexOf(filter) != -1){
                                            results.push(item);
                                            isFiltered = true;
                                        }
                                    }
                                })
                            })
                        }
                    })
                    dispatch(fetchProductsSuccess(results));
            }
        
            
        }
        catch (err){
            dispatch(fetchProductsFailure(err));
        }
    }
}