import { CreateInstance } from "../../config/APIConfig"

const GetBlogCount=(filterData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .post('/dashboard/dashboard.php/getBlogsCount',filterData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveBlogCount(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

const GetCommentCount=(filterData)=>{
    return(dispatch)=>{
        return CreateInstance()
            .post('/dashboard/dashboard.php/getCommentCount',filterData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(saveCommentCount(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

//------------------------------

export function saveBlogCount(blogCount){
    return{
        type:"SAVE_BLOG_COUNT",
        blogCount
    }
}

export function saveCommentCount(commentCount){
    return{
        type:"SAVE_COMMENT_COUNT",
        commentCount
    }
}

export{
    GetBlogCount,
    GetCommentCount
}