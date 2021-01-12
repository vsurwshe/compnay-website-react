import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogTable from './BlogTable';
import Loading from '../../component/utilities/loader/Loader'
import BlogFrom from './BlogFrom';
import {Card} from 'react-bootstrap'
import * as BlogAction from '../../redux/actions/BlogAction';
import { bindActionCreators } from 'redux';
import { RenderToast } from '../adminUtilites/FromUtilites';
class BlogManagement extends Component {
    state = { 
        loadBlogTableValue: false,
        fromAction:false,
        stateBlogData:[],
        operation:""
    }

    // this will fetch required data
    componentDidMount=async()=>{
        const { blogList }=this.props.BlogState
        const { GetBlogList, saveBlogRecord }=this.props.BlogAction
        await this.handelBlogLoadList();
        await saveBlogRecord([]);
        (blogList && blogList.length <=0) && await GetBlogList();
        await this.handelBlogLoadList();
    }

    // this method will handel blog load value
    handelBlogLoadList=()=>{ this.setState({loadBlogTableValue: !this.state.loadBlogTableValue})}

    // this method will handel form action
    handelFromAction=(operation,stateBlogData)=>{ this.setState({ operation, stateBlogData, fromAction: !this.state.fromAction})}

    render() { 
        const { fromAction }= this.state
        return <Card>{fromAction ? this.loadBlogFrom() : this.loadBlogTable()}</Card> 
    }

    // this method will loading blog form
    loadBlogFrom=()=>{
        const { stateBlogData, operation }=this.state
        const { blogData }=this.props.BlogState
        return <>
            { (blogData && blogData.length >0) && <RenderToast message={blogData} />}
            <BlogFrom
                fromAction={this.handelFromAction} 
                initialValues={stateBlogData}
                operation={operation}
            />
        </>
    }

    // this method will loading blog tabel
    loadBlogTable=()=>{
        const { loadBlogTableValue }=this.state
        return loadBlogTableValue ?  this.loading(): this.renderBlogTable();
    }

    loading=()=><center><Loading /></center>

    //this method will render blog table
    renderBlogTable=()=>{
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