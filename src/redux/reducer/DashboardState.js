const initialState={
    blogsCount:[],
    commentSerise:[],
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
            let tempCommentSerise = (action.commentCount && action.commentCount.length >0) && action.commentCount[0].blogId
            let tempCommentData = (action.commentCount && action.commentCount.length >0) && action.commentCount[0].blogCommentData.map((item,key)=>{ return {...item, "month": months[item.month]} })
            return {...state,commentSerise:tempCommentSerise, commentCount: tempCommentData}
        default:
            return state;
    }
}


// this is month name array
var months = ['', 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];


export default DashboardState;