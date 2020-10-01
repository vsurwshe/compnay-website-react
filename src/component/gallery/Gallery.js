import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../utilities/loader/Loader'
import * as GalleryAction from '../../redux/actions/GalleryAction'
import { bindActionCreators } from 'redux';
class Gallery extends Component {
    state = { 
        loadGalleryList:false
    }

    componentDidMount=async()=>{
        const { galleryList }=this.props.GalleryState
        const { GetGalleryList }=this.props.GalleryAction
        await this.handleGalleryList();
        (galleryList && galleryList.length <=0) && await GetGalleryList();
        await this.handleGalleryList();

    }

    handleGalleryList=()=>{this.setState({ loadGalleryList: !this.state.loadGalleryList})}

    render() { 
        const { loadGalleryList} = this.state
        return loadGalleryList ? this.loading() : this.loadGallery();
    }
    
    loadGallery=()=>{
        const { galleryList }=this.props.GalleryState
        return <div class="gallery pt-5">
		    <div class="container pt-xl-5 pt-lg-3">
                <h3 class="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">Gallery</h3>
                <p class="title-para text-center mx-auto mb-sm-5 mb-4">This our Company gallery, here gives a quick review of our company.</p>
                <ul class="demo">
                   {(galleryList && galleryList.length >0)&& galleryList.map((item,key)=>this.loadRowGalleryImages(item,key))}
                </ul>   
            </div> 
        </div>
    }

    loading=()=><center><Loading /></center>

    loadRowGalleryImages=(rowData, key)=>{
        let image='data:image/jpeg;base64,'+rowData.data;
        return <li key={key}>
            <div class="gallery-grid1">
                <img src={image} alt=" " class="img-fluid" />
                <div class="p-mask">
                    <h4>{rowData.clientName}</h4>
                    <p>{rowData.clientCompnay}</p>
                </div>
            </div>
        </li>
    }
}

const mapStateToProps = state => { return state; };
const mapDispatchToProps=(dispatch)=>({
    GalleryAction: bindActionCreators(GalleryAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Gallery);