import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogTable from './BlogTable';
import Loading from '../../component/utilities/loader/Loader'
import BlogFrom from './BlogFrom';
import {Card} from 'react-bootstrap'

class BlogManagement extends Component {
    state = { 
        loadBlogTableValue: false,
        fromAction:false,
        blogData:[],
        operation:""
    }

    handelBlogLoadList=()=>{ this.setState({loadBlogTableValue: !this.state.loadBlogTableValue})}

    handelFromAction=(operation,blogData)=>{ this.setState({ operation, blogData, fromAction: !this.state.fromAction})}

    render() { 
        const { fromAction }= this.state
        return <Card>{fromAction ? this.loadBlogFrom() : this.loadBlogTable()}</Card> 
    }

    loadBlogFrom=()=>{
        return <BlogFrom
            fromAction={this.handelFromAction} 
        />
    }

    loadBlogTable=()=>{
        const { loadBlogTableValue }=this.state
        return loadBlogTableValue ? <Loading /> : this.loadingBlogTable();
    }

    loadingBlogTable=()=>{
        return <BlogTable 
            fromAction={this.handelFromAction}
        />
    }
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps)(BlogManagement);