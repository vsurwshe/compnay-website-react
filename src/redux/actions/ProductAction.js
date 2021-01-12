import { CreateInstance } from "../../config/APIConfig"

// this method will get product list
const GetProductList=()=>{
    return(dispatch)=>{
        return CreateInstance()
            .get('/product/products.php',{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveProductList(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

// this method will save product record
const CreateProductRecord=(productData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .post('/product/products.php',productData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveProductRecord(response.data)))
            .catch(error => console.log("Error ", error))
    }
}

// this method will update product record
const UpdateProductRecord=(id,productData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .put('/product/products.php/'+id,productData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveProductUpdateRecord(response.data)))
            .catch(error => console.log("Error ", error))
    }
}

// this method will delete product record
const DeleteProductRecord=(id)=>{
    return(dispatch)=>{
        return CreateInstance()
            .delete('/product/products.php/'+id,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveProductDeleteRecord(response.data)))
            .catch(error => console.log("Error ", error))
    }
}

//-----------------------------

export function saveProductList(productList){
    return{
        type:"SAVE_PRODUCT_LIST",
        productList
    }
}

export function saveProductRecord(productData){
    return{
        type:"SAVE_PRODUCT_RECORD",
        productData
    }
}

export function saveProductUpdateRecord(productData){
    return{
        type:"SAVE_PRODUCT_UPDATE_RECORD",
        productData
    }
}

export function saveProductDeleteRecord(productData){
    return{
        type:"SAVE_PRODUCT_DELETE_RECORD",
        productData
    }
}

export{
    GetProductList,
    CreateProductRecord,
    UpdateProductRecord,
    DeleteProductRecord
}