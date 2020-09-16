import { CreateInstance } from "../../config/APIConfig"

const GetBlogList=()=>{
    return(dispatch)=>{
        return CreateInstance()
            .get('/blog/blogs.php ',{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveBlogList(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

const CreateBlog=(blogData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .post('/blog/blogs.php ',blogData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveBlogRecord(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

const UpdateBlogRecord=(id,blogData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .put('/blog/blogs.php/'+id,blogData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveBlogRecord(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

const DeleteBlogRecord=(id)=>{
    return(dispatch)=>{
        return CreateInstance()
            .delete('/blog/blogs.php/'+id,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveBlogRecord(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

//-------------------------

export function saveBlogList(blogList){
    return{
        type:"SAVE_BLOG_LIST",
        blogList
    }
}

export function saveBlogRecord(blogRecord){
    return{
        type:"SAVE_BLOG_RECORD",
        blogRecord
    }
}

export function saveUpdateBlogRecord(blogRecord){
    return{
        type:"SAVE_BLOG_UPDATE_RECORD",
        blogRecord
    }
}

export function saveDeleteBlogRecord(blogRecord){
    return{
        type:"SAVE_BLOG_DELETE_RECORD",
        blogRecord
    }
}

export{
    GetBlogList,
    CreateBlog,
    UpdateBlogRecord,
    DeleteBlogRecord
}