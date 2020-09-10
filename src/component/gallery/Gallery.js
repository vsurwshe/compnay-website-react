import React, { Component } from 'react';
import { connect } from 'react-redux';

class Gallery extends Component {
    state = {  }
    render() { 
        return this.loadGallery();
    }

    loadGallery=()=>{
        const { gallery }=this.props.CommonState
        return <div class="gallery pt-5">
		    <div class="container pt-xl-5 pt-lg-3">
                <h3 class="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">Gallery</h3>
                <p class="title-para text-center mx-auto mb-sm-5 mb-4">This our Company gallery, here gives a quick review of our company.</p>
                <ul class="demo">
                   {(gallery && gallery.length >0)&& gallery.map((item,key)=>this.loadRowGalleryImages(item,key))}
                </ul>   
            </div> 
        </div>
    }

    loadRowGalleryImages=(rowData, key)=>{
        return <li key={key}>
            <div class="gallery-grid1">
                <img src={rowData.img} alt=" " class="img-fluid" />
                <div class="p-mask">
                    <h4>{rowData.name}</h4>
                    <p>{rowData.companyName}</p>
                </div>
            </div>
        </li>
    }
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps)(Gallery);