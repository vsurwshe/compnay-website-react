const initialState={
    blogsCount:[],
    commentCount:[]
}

const DashboardState=(state=initialState,action)=>{
    switch (action && action.type) {
        case "SAVE_BLOG_COUNT":
            let tempBlogCount = (action.blogCount && action.blogCount.length >0) && action.blogCount.map((item)=>{
                return{...item, 'month':months[item.month]}
            })
            return {...state, blogsCount: tempBlogCount}
        case "SAVE_COMMENT_COUNT":
            return {...state, commentCount: action.commentCount}
        default:
            return state;
    }
}


// this is month name array
var months = ['', 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];


export default DashboardState;