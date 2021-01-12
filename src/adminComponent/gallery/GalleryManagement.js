import React, { Component } from 'react';
import Loading from '../../component/utilities/loader/Loader';
import GalleryTable from './GalleryTable';
import GalleryFrom from './GalleryFrom';
import { connect } from 'react-redux';
import * as GalleryAction from '../../redux/actions/GalleryAction'
import { bindActionCreators } from 'redux';
import { RenderToast } from '../adminUtilites/FromUtilites';
class GalleryManagment extends Component {
    state = { 
        loadGalleryListValue:false,
        fromAction:false,
        operation:"",
        stateGalleryData:[]
    }

    // this will fetch required data
    componentDidMount=async()=>{
        const { galleryList }=this.props.GalleryState
        const { GetGalleryList, saveGalleryRecord }=this.props.GalleryAction
        await this.handleLoadGalleryListValue();
        await saveGalleryRecord([]);
        (galleryList && galleryList.length <=0) && await GetGalleryList();
        await this.handleLoadGalleryListValue();
    }

    // this method will handel the load value
    handleLoadGalleryListValue=()=>{ this.setState({ loadGalleryListValue : !this.state.loadGalleryListValue})}

    // this method will handel the form action
    handleFormAction=(operation,stateGalleryData)=>{ this.setState({operation, stateGalleryData, fromAction: !this.state.fromAction})}

    render() { 
        const { fromAction }=this.state
        return fromAction ? this.loadGalleryFrom(): this.loadGalleryTable();
    }

    // this method will load gallery tabel
    loadGalleryTable=()=>{
        const { loadGalleryListValue }=this.state
        return loadGalleryListValue ? this.loading() : this.renderGalleryTable();
    }

    loading=()=><center><Loading /></center>

    // this method will render gallery table
    renderGalleryTable=()=>{
        return <GalleryTable  fromAction={this.handleFormAction} />
    }

    // this method will load gallery form
    loadGalleryFrom=()=>{
        const { stateGalleryData,operation }=this.state
        const { galleryData }=this.props.GalleryState
        return <>
            {(galleryData && galleryData.length >0)&& <RenderToast message={galleryData} />}
            <GalleryFrom 
                fromAction={this.handleFormAction}
                initialValues={stateGalleryData}
                operation={operation}
            />
        </>
    }
}

const mapStateToProps = state => { return state; };
const mapDispatchToProps= dispatch=>({
    GalleryAction: bindActionCreators(GalleryAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(GalleryManagment);