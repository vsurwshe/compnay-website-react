import { CreateInstance } from "../../config/APIConfig"

const GetGalleryList=()=>{
    return(dispatch)=>{
        return CreateInstance()
            .get('/gallery/gallery.php',{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveGalleryList(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

const CreateGalleryRecord=(galleryData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .post('/gallery/gallery.php',galleryData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveGalleryRecord(response.data)))
            .catch(error => console.log("Error ", error))
    }
}

//-----------------------------

export function saveGalleryList(galleryList){
    return{
        type:"SAVE_GALLERY_LIST",
        galleryList
    }
}

export function saveGalleryRecord(galleryData){
    return{
        type:"SAVE_GALLERY_RECORD",
        galleryData
    }
}

export{
    GetGalleryList,
    CreateGalleryRecord,
}