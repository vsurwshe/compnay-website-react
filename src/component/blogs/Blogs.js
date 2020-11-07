import React, { Component } from 'react';
import {LoadSerachBlog, LoadBlogList, LoadComments} from './BlogsUtilites'
import CommentFrom from './CommentFrom'
import * as BlogAction from '../../redux/actions/BlogAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from '../utilities/loader/Loader'

class Blogs extends Component {
    state = { 
        loadBlogListValue: false,
        selectedBlogData:[]
    }

    // this method will handle pogress bar
    handleBlogListValue=()=>{this.setState({ loadBlogListValue: !this.state.loadBlogListValue})}

    // this method will handle set selected blog data 
    handleSelectedBlogData=(blogData)=>{
        this.setState({ selectedBlogData: blogData})
        blogData && this.handleCommentList(blogData.blogId);
    }

    handleCommentList=async(id)=>{
        const { GetCommentListById }=this.props.BlogAction
        id && await GetCommentListById(id);
    }

    componentDidMount=async()=>{
        const { blogList,blogListCategoy }=this.props.BlogState
        const { GetBlogList, GetCategoryBlogList }=this.props.BlogAction
        await this.handleBlogListValue();
        (blogList && blogList.length <=0) && await GetBlogList();
        (blogListCategoy && blogListCategoy.length <=0) && await GetCategoryBlogList();
        await this.loadBlogAndComment();
        await this.handleBlogListValue();
    }

    loadBlogAndComment=async()=>{
        const { blogList }=this.props.BlogState
        await this.handleSelectedBlogData(blogList[0]);
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
        const { selectedBlogData }=this.state
        const { commentList }=this.props.BlogState
        return <div className="col-lg-8 left-blog-info text-left">
               {this.loadBlogBody()}
               <LoadComments comments={commentList} />
               <CommentFrom blogData={selectedBlogData} />
        </div>
    }

    loadBlogBody=()=>{
        const { selectedBlogData }=this.state
        return <div className="blog-grid-top">
               <h2>{selectedBlogData && selectedBlogData.blogName}</h2> 
            <hr/>
                {(selectedBlogData && selectedBlogData.blogBody !== "") ? 
                  <div dangerouslySetInnerHTML={{ __html: selectedBlogData.blogBody }} />
                    :<h3 className="single-text text-dark font-weight-light txt2"> Sorry No Blogs Available....! </h3>}
            <span id="blogs_writer" className="float-right">{(selectedBlogData && selectedBlogData.blogWriter !== "") && <>Written by -&nbsp;{selectedBlogData.blogWriter}</>}</span><br/>
            <hr/>
        </div>
    }

    // this will load the right section
    loadRightSection=()=>{
        const { blogList, blogListCategoy }=this.props.BlogState
        return <div className="col-lg-4 event-right mt-lg-0 mt-sm-5 mt-4">
            <div className="event-right1">
                <LoadSerachBlog />
                <LoadBlogList 
                    blogs={blogList}
                    changeBlog={this.handleSelectedBlogData}
                    blogListCategoy={blogListCategoy}
                />
               
            </div>
        </div>
    }
}

const mapStateToProps=(state)=>{return state;}
const mapDispatchToProps=(dispatch)=>({
    BlogAction: bindActionCreators(BlogAction, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Blogs);