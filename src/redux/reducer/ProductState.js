const initialState={
    productList:[],
    productData:[]
}

const ProductState=(state=initialState,action)=>{
    switch (action && action.type) {
        case "SAVE_PRODUCT_LIST":
            return {...state, productList:action.productList}
        case "SAVE_PRODUCT_RECORD":
            return {...state, productData:action.productData}
        case "SAVE_PRODUCT_UPDATE_RECORD":
            return {...state, productData:action.productData}
        case "SAVE_PRODUCT_DELETE_RECORD":
            return {...state, productData:action.productData}
        default:
            return state;
    }
}

export default ProductState;