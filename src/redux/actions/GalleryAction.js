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

const UpdateGalleryRecord=(id,galleryData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .put('/gallery/gallery.php/'+id,galleryData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveGalleryUpdateRecord(response.data)))
            .catch(error => console.log("Error ", error))
    }
}

const DeleteGalleryRecord=(id)=>{
    return(dispatch)=>{
        return CreateInstance()
            .delete('/gallery/gallery.php/'+id,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveGalleryDeleteRecord(response.data)))
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

export function saveGalleryUpdateRecord(galleryData){
    return{
        type:"SAVE_GALLERY_UPDATE_RECORD",
        galleryData
    }
}

export function saveGalleryDeleteRecord(galleryData){
    return{
        type:"SAVE_GALLERY_DELETE_RECORD",
        galleryData
    }
}

export{
    GetGalleryList,
    CreateGalleryRecord,
    UpdateGalleryRecord,
    DeleteGalleryRecord
}