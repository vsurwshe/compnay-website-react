import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ProductAction from '../../redux/actions/ProductAction'
import { bindActionCreators } from 'redux';
import Loading from '../utilities/loader/Loader';

class Products extends Component {
    state = {  
        loadProductList:false
    }
    
    componentDidMount=async()=>{
        const{ productList }=this.props.ProductState
        const{ GetProductList }=this.props.ProductAction
        await this.handleLoadProductListValue();
        (productList && productList.length <=0) && await GetProductList();
        await this.handleLoadProductListValue();
    }

    handleLoadProductListValue=()=>{this.setState({ loadProductList : !this.state.loadProductList})}
    
    render() { 
        const { loadProductList }=this.state
        return loadProductList ? this.loading(): this.loadProductList();
    }

    loading=()=> <Loading />

    loadProductList=()=>{
        const { productList }=this.props.CommonState
        return <div className="gallery pt-5">
		    <div className="container pt-xl-5 pt-lg-3">
			    <h3 className="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">Products </h3>
			    <p className="title-para text-center mx-auto mb-sm-5 mb-4">This our Company Product List, here gives a quick review of our company products which is sucessfully done.</p>
			    <ul className="demo"> 
                    {(productList && productList.length>0)&& productList.map((item,key)=>this.loadProduct(item,key))}
                </ul>
            </div>
        </div>
    }
    
    loadProduct=(item,key)=>{
        let image='data:image/jpeg;base64,'+item.data;
        return  <li key={key} >
            <div className="gallery-grid1">
                <img src={image} alt=" " className="img-fluid" />
                <div className="p-mask">
                    <h4>{item.clientName}</h4>
                    <p>{item.companyName}</p>
                </div>
            </div>
    </li>
    }
}

const mapStateToProps = state => { return state; };
const mapDispatchToProps = (dispatch) => ({
    ProductAction: bindActionCreators(ProductAction, dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(Products);