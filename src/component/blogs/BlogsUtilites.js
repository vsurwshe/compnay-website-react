import React from 'react';

const LoadSerachBlog=()=>{
    return   <div className="search1">
    <h3 className="blog-title text-dark mb-3">Search</h3>
    <form className="form-inline" action="#" method="post">
        <input className="form-control rounded-0 mr-sm-2" type="search" placeholder="Search Here" aria-label="Search" required />
        <button className="btn bg-dark text-white rounded-0 mt-3" type="submit">Search</button>
    </form>
</div>
}

const LoadBlogList=(props)=>{
    const { blogs }=props
    return  <div className="category-story tech-btm">
        <h3 className="blog-title text-dark mb-3">More Blogs</h3>
        <ul className="list-unstyled">
            {(blogs && blogs.length >0) && blogs.map((item,key)=>LoadSingleBlog(item,key))}
        </ul>
    </div>
}

const LoadSingleBlog=(item,key)=>{
    return <li key={key} className="border-bottom mb-3 pb-3">
    <i className="fa fa-caret-right mr-2" />
    <a href="#" className="text-danger txt1">{item.blogName}</a>
</li>
}

const LoadComments=(props)=>{
    const { comments }=props
    return <div className="comment-top mt-4" >
        <h4>Comments</h4>
        <hr />
        <div className="comments-list">
            {(comments && comments.length>0) && comments.map((item,key)=>LoadSingleComment(item,key))}
        </div>
    </div>
}

const LoadSingleComment=(item,key)=>{
    return <div style={{padding:10}} className="media">
     <div> <img src="images/user.png" style={{marginTop:10}} />  </div>
     <div style={{marginLeft:10}}>
       <h5 style={{marginBottom:8}}>{item.commentName}</h5>
       {item.commentMessage}
     </div>
   </div>
}

export {
    LoadSerachBlog,
    LoadBlogList,
    LoadComments
}