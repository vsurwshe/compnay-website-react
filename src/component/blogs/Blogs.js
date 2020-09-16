import React, { Component } from 'react';
import {LoadSerachBlog, LoadBlogList, LoadComments} from './BlogsUtilites'
import CommentFrom from './CommentFrom'
import * as BlogAction from '../../redux/actions/BlogAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from '../utilities/loader/Loader'



class Blogs extends Component {
    state = { 
        loadBlogListValue: false
    }

    handleBlogListValue=()=>{this.setState({ loadBlogListValue: !this.state.loadBlogListValue})}

    componentDidMount=async()=>{
        const { commentList, blogList }=this.props.BlogState
        const { GetCommentList, GetBlogList }=this.props.BlogAction
        await this.handleBlogListValue();
        (blogList && blogList.length <=0) && await GetBlogList();
        (commentList && commentList.length <=0) && await GetCommentList();
        await this.handleBlogListValue();
    }

    render() {
        const { loadBlogListValue }=this.state 
        return loadBlogListValue ? this.loadLoading() : this.loadMainSection(); 
    }

    loadLoading=()=><center><Loading /></center>

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
        const { commentList, blogList }=this.props.BlogState
        return <div className="col-lg-8 left-blog-info text-left">
               {this.loadBlogBody()}
               <LoadComments 
                comments={commentList} 
               />
               <CommentFrom />
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

    // this will load the right section
    loadRightSection=()=>{
        const { blogList }=this.props.BlogState
        return <div className="col-lg-4 event-right mt-lg-0 mt-sm-5 mt-4">
            <div className="event-right1">
                <LoadBlogList blogs={blogList}  />
                <LoadSerachBlog />
            </div>
        </div>
    }
}

const mapStateToProps=(state)=>{return state;}
const mapDispatchToProps=(dispatch)=>({
    BlogAction: bindActionCreators(BlogAction, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Blogs);