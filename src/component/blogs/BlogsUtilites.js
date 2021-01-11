import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

const LoadSerachBlog=()=>{
    return   <div className="search1" style={{paddingBottom:30}}>
    <form className="form-inline" action="#" method="post">
        <input className="form-control rounded-0 mr-sm-2" type="search" placeholder="Enter Blog title..." aria-label="Search" required />
        <button className="btn bg-dark text-white rounded-30 mr-sm-2" type="submit">Search Blog</button>
    </form>
</div>
}

const LoadBlogList=(props)=>{
    const { changeBlog, blogListCategoy }=props
    return  <div className="category-story tech-btm">
        <h3 className="blog-title text-dark mb-3">Blog List by Category</h3>
        <Accordion defaultActiveKey={1}>
            {(blogListCategoy && blogListCategoy.length >0) && blogListCategoy.map((item,key)=>LoadSingleCardHeader(item, (key+1), changeBlog)) }
        </Accordion>
    </div>
}



const LoadSingleCardHeader=(data, key, changeBlog)=>{
    console.log("Key ",key)
    return <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={key}> {data.category.toUpperCase()} </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={key}>
      <Card.Body>
        <ul className="list-unstyled">
            {(data && data.blogsList && data.blogsList.length >0) && data.blogsList.map((item,key)=>LoadSingleBlog(item,key,changeBlog))}
        </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
}

const LoadSingleBlog=(item,key,changeBlog)=>{
    return <li key={key} className="mb-3 pb-3">
        <i className="fa fa-caret-right mr-2" onClick={()=>changeBlog(item)}>
        &nbsp;&nbsp;<span className="text-danger txt1">{CapitalFirstLetter(item.blogName)}</span>
    </i>
</li>
}

const CapitalFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
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
     <div> <img src={`${process.env.PUBLIC_URL}/images/user.png`} alt="user" style={{marginTop:10}} />  </div>
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