import { CreateInstance } from "../../config/APIConfig"

const GetBlogList=()=>{
    return(dispatch)=>{
        return CreateInstance()
            .get('/blog/blogs.php ',{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(response => dispatch(SaveBlogList(response.data)) )
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
            .then(response => dispatch(SaveBlogRecord(response.data)) )
            .catch(error => console.log("Error ", error))
    }
}

//-------------------------

export function SaveBlogList(blogList){
    return{
        type:"SAVE_BLOG_LIST",
        blogList
    }
}

export function SaveBlogRecord(blogRecord){
    return{
        type:"SAVE_BLOG_RECORD",
        blogRecord
    }
}

export{
    GetBlogList,
    CreateBlog
}