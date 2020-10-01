const initialState={
    galleryList:[],
    galleryData:[]
}

const GalleryState=(state= initialState, action)=>{
    switch (action && action.type) {
        case "SAVE_GALLERY_LIST":
            return{...state, galleryList:action.galleryList}
        case "SAVE_GALLERY_RECORD":
            return{...state, galleryData:action.galleryData}  
        case "SAVE_GALLERY_UPDATE_RECORD":
            return{...state, galleryData:action.galleryData} 
        case "SAVE_GALLERY_DELETE_RECORD":
            return{...state, galleryData:action.galleryData}          
        default:
            return state;
    }
}

export default GalleryState;