import React, { Component } from 'react';
import Loading from '../../component/utilities/loader/Loader';
import GalleryTable from './GalleryTable';
import GalleryFrom from './GalleryFrom';
import { connect } from 'react-redux';
import * as GalleryAction from '../../redux/actions/GalleryAction'
import { bindActionCreators } from 'redux';
class GalleryManagment extends Component {
    state = { 
        loadGalleryListValue:false,
        fromAction:false,
        operation:"",
        galleryData:[]
    }

    componentDidMount=async()=>{
        const { galleryList }=this.props.GalleryState
        const { GetGalleryList }=this.props.GalleryAction
        await this.handleLoadGalleryListValue();
        (galleryList && galleryList.length <=0) && await GetGalleryList();
        await this.handleLoadGalleryListValue();
    }

    handleLoadGalleryListValue=()=>{ this.setState({ loadGalleryListValue : !this.state.loadGalleryListValue})}

    handleFormAction=(operation,galleryData)=>{ this.setState({operation, galleryData, fromAction: !this.state.fromAction})}

    render() { 
        const { fromAction }=this.state
        return fromAction ? this.loadGalleryFrom(): this.loadGalleryTable();
    }

    loadGalleryTable=()=>{
        const { loadGalleryListValue }=this.state
        return loadGalleryListValue ? this.loading() : this.loadingGalleryTable();
    }

    loading=()=><center><Loading /></center>

    loadingGalleryTable=()=>{
        return <GalleryTable 
                fromAction={this.handleFormAction}
            />
    }

    loadGalleryFrom=()=>{
        return <GalleryFrom 
            fromAction={this.handleFormAction}
        />
    }
}

const mapStateToProps = state => { return state; };
const mapDispatchToProps= dispatch=>({
    GalleryAction: bindActionCreators(GalleryAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(GalleryManagment);