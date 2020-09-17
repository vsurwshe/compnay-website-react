const initialState={
    blogList:[],
    blogListCategoy:[],
    blogData:[],
    commentList:[],
    commentData:[]
}

const BlogState=(state=initialState,action)=>{
    switch (action && action.type) {
        case "SAVE_BLOG_LIST":
            return {...state, blogList: action.blogList}
        case "SAVE_CATEGORY_BLOG_LIST":
            return {...state, blogListCategoy: action.blogList}
        case "SAVE_BLOG_RECORD":
            return {...state, blogData: action.blogRecord}
        case "SAVE_BLOG_UPDATE_RECORD":
            return {...state, blogData: action.blogRecord}
        case "SAVE_BLOG_DELETE_RECORD":
            return {...state, blogData: action.blogRecord}
        case "SAVE_COMMENT_LIST":
            return {...state, commentList: action.commentList}
        case "SAVE_COMMENT_LIST_BY_ID":
            return {...state, commentList: action.commentList}
        case "SAVE_COMMENT_RECORD":
            return {...state, commentData: action.commentRecord}
        default:
            return state;
    }
}

export default BlogState;