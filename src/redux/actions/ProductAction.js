import { CreateInstance } from "../../config/APIConfig"

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

export{
    GetProductList,
    CreateProductRecord,
}