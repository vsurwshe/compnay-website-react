import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogTable from './BlogTable';
import Loading from '../../component/utilities/loader/Loader'
import BlogFrom from './BlogFrom';
import {Card} from 'react-bootstrap'
import * as BlogAction from '../../redux/actions/BlogAction';
import { bindActionCreators } from 'redux';
class BlogManagement extends Component {
    state = { 
        loadBlogTableValue: false,
        fromAction:false,
        blogData:[],
        operation:""
    }

    componentDidMount=async()=>{
        const { blogList }=this.props.BlogState
        const { GetBlogList }=this.props.BlogAction
        await this.handelBlogLoadList();
        (blogList && blogList.length <=0) && await GetBlogList();
        await this.handelBlogLoadList();
    }

    handelBlogLoadList=()=>{ this.setState({loadBlogTableValue: !this.state.loadBlogTableValue})}

    handelFromAction=(operation,blogData)=>{ this.setState({ operation, blogData, fromAction: !this.state.fromAction})}

    render() { 
        const { fromAction }= this.state
        return <Card>{fromAction ? this.loadBlogFrom() : this.loadBlogTable()}</Card> 
    }

    loadBlogFrom=()=>{
        const { blogData }=this.state
        return <BlogFrom
            fromAction={this.handelFromAction} 
            initialValues={blogData}
        />
    }

    loadBlogTable=()=>{
        const { loadBlogTableValue }=this.state
        return loadBlogTableValue ?  this.loading(): this.loadingBlogTable();
    }

    loading=()=><center><Loading /></center>

    loadingBlogTable=()=>{
        return <BlogTable 
            fromAction={this.handelFromAction}
        />
    }
}

const mapStateToProps = state => { return state; };
const mapDispatchToProps= (dispatch)=>({
    BlogAction : bindActionCreators(BlogAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(BlogManagement);