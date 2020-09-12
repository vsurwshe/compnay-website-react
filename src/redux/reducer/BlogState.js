const initialState={
    blogList:[],
    blogData:[]
}

const BlogState=(state=initialState,action)=>{
    switch (action && action.type) {
        case "SAVE_BLOG_LIST":
            return {...state, blogList: action.blogList}
        case "SAVE_BLOG_RECORD":
            return {...state, blogData: action.blogRecord}
        default:
            return state;
    }
}

export default BlogState;