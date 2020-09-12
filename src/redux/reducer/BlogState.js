const initialState={
    blogList:[]
}

const BlogState=(state=initialState,action)=>{
    switch (action && action.type) {
        case "SAVE_BLOG_LIST":
            return {...state, blogList: action.blogList}
        default:
            return state;
    }
}

export default BlogState;