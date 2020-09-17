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

const GetCommentList=()=>{
    return(dispatch)=>{
        return CreateInstance()
            .get('/comment/comment.php',{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveCommentList(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

const GetCommentListById=(id)=>{
    return(dispatch)=>{
        return CreateInstance()
            .get('/comment/comment.php/'+id,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveCommentListById(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

const GetCategoryBlogList=()=>{
    return(dispatch)=>{
        return CreateInstance()
            .get('/blog/blogs.php/categoery',{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveCategoryBlogList(response.data)) )
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

const CreateComment=(commentData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .post('/comment/comment.php',commentData,{
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

export function saveCommentList(commentList){
    return{
        type:"SAVE_COMMENT_LIST",
        commentList
    }
}

export function saveCategoryBlogList(blogList){
    return{
        type:"SAVE_CATEGORY_BLOG_LIST",
        blogList
    }
}

export function saveCommentListById(commentList){
    return{
        type:"SAVE_COMMENT_LIST_BY_ID",
        commentList
    }
}

export function saveBlogRecord(blogRecord){
    return{
        type:"SAVE_BLOG_RECORD",
        blogRecord
    }
}

export function saveCommentRecord(commentRecord){
    return{
        type:"SAVE_COMMENT_RECORD",
        commentRecord
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
    GetCommentList,
    CreateBlog,
    UpdateBlogRecord,
    DeleteBlogRecord,
    CreateComment,
    GetCommentListById,
    GetCategoryBlogList
}