import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/ProductAction'
import ProductTable from './ProductTable';
import ProductFrom from './ProductFrom'
import Loading from '../../component/utilities/loader/Loader'
import { RenderToast } from '../adminUtilites/FromUtilites';

class ProductManagement extends Component {
    state = {  
        loadProductListValue: false,
        fromAction:false,
        operation:"",
        stateProductData:[]
    }

    // this method will reuired fetch data
    componentDidMount=async()=>{
        const { productList }=this.props.ProductState
        const { GetProductList, saveProductRecord }=this.props.ProductAction
        await this.handleLoadProductListValue();
        await saveProductRecord([]);
        (productList && productList.length <=0) && await GetProductList();
        await this.handleLoadProductListValue();
    }

    // this method will handel loading value
    handleLoadProductListValue=()=>{this.setState({loadProductListValue : !this.state.loadProductListValue})}

    // this method will handel form action
    handleFromAction=(operation, stateProductData)=>{ this.setState({operation, stateProductData, fromAction : !this.state.fromAction})}

    render() { 
        const { fromAction }=this.state
        return fromAction ? this.loadProductFrom() : this.loadProductTable()
    }

    // this method will loading from
    loadProductFrom=()=>{
        const { stateProductData, operation }=this.state
        const { productData }=this.props.ProductState
        return <>
            {(productData && productData.length >0) && <RenderToast message={productData} />}
            <ProductFrom 
                fromAction={this.handleFromAction}
                initialValues={stateProductData}
                operation={operation}
            />
        </>
    }

    // this method will load product tabel
    loadProductTable=()=>{
        const { loadProductListValue }=this.state
        return loadProductListValue ? this.loading() : this.renderProductTable()
    }

    loading=()=><center><Loading /></center>

    // this method will render product table
    renderProductTable=()=>{
        return <ProductTable  fromAction={this.handleFromAction} />
    }
}
const mapStateToProps=(state)=>{return state;}
const mapDispatchToProps=(dispatch)=>({
    ProductAction: bindActionCreators(ProductAction, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductManagement);