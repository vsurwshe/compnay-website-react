import React, { Component } from 'react';

class Blogs extends Component {
    state = {  }
    render() { 
        return this.loadMainSection();
    }

    loadMainSection=()=>{
        return  <div className="blog-w3l pt-5">
            <div className="container pt-xl-5 pt-lg-3">
                <h3 className="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">Our Blogs</h3>
                <div className="row blog-content">
                    {this.loadLeftSection()}
                    {this.loadRightSection()}
                </div>
            </div>
        </div>
    }

    // this will load the left sections
    loadLeftSection=()=>{
        return <div className="col-lg-8 left-blog-info text-left">
               {this.loadBlogBody()}
               {this.loadCommentForm()} 
               {this.loadComments()}
        </div>
    }

    loadBlogBody=()=>{
        return <div className="blog-grid-top">
            <div className="b-grid-top">
                <div className="blog_info_left_grid">
                    <a href="blogs.php">
                        <img src="images/bg.jpg" className="img-fluid" alt="" />
                    </a>
                </div>
            </div> 
            <hr/>
            <h3> <a href="blogs.php" className="single-text text-dark font-weight-light txt2" id="blogs_heading"> Sorry No Blogs Available....! </a></h3>
            <hr/>
            <span id="blogs_body" className="blogs_body"></span>
            <span id="blogs_writer" className="float-right"></span>
        </div>
    }

    loadComments=()=>{
        return <div className="comment-top mt-4" >
            <h4>Comments</h4>
            <br/>
            <div className="media">
                <div className="media-body pt-xl-2 pl-3" id="commentBlog">
                </div>
            </div>
        </div>
    }

    loadCommentForm=()=>{
        return <div className="comment-top mt-5">
        <h4>Leave a Comment</h4>
        <hr />
        <h3 id="commentResult"></h3>
        <div className="comment-bottom">
            <form id="leaveForm" method="POST">
                <div className="form-group">
                    <input className="form-control" type="text" name="Name" id="Name" placeholder="Name" required="" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" name="Email" id="Email" placeholder="Email" required="" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="Message" id="Message" placeholder="Message..." required=""></textarea>
                </div>
                <button type="submit" name="Submit" className="btn btn-primary submit">Submit Your Comment</button>
            </form>
        </div>
    </div>
    }

    // this will load the right section
    loadRightSection=()=>{
        return <div className="col-lg-4 event-right mt-lg-0 mt-sm-5 mt-4">
            <div className="event-right1">
                {this.loadBlogList()}
                {this.loadSerachBlog()}
            </div>
        </div>
    }

    loadBlogList=()=>{
        return  <div className="category-story tech-btm">
            <h3 className="blog-title text-dark mb-3">More Blogs</h3>
            <ul className="list-unstyled">
                <li className="border-bottom mb-3 pb-3">
                    <i className="fa fa-caret-right mr-2" />
                    <a href="#" className="text-danger txt1" onclick="">gghjghd</a>
                </li>
            </ul>
        </div>
    }

    loadSerachBlog=()=>{
        return   <div className="search1">
        <h3 className="blog-title text-dark mb-3">Search</h3>
        <form className="form-inline" action="#" method="post">
            <input className="form-control rounded-0 mr-sm-2" type="search" placeholder="Search Here" aria-label="Search" required />
            <button className="btn bg-dark text-white rounded-0 mt-3" type="submit">Search</button>
        </form>
    </div>
    }
}
 
export default Blogs;