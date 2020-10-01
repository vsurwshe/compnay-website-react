import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/ProductAction'
import ProductTable from './ProductTable';
import ProductFrom from './ProductFrom'
import Loading from '../../component/utilities/loader/Loader'

class ProductManagement extends Component {
    state = {  
        loadProductListValue: false,
        fromAction:false,
        operation:"",
        productData:[]
    }

    componentDidMount=async()=>{
        const { productList }=this.props.ProductState
        const { GetProductList }=this.props.ProductAction
        await this.handleLoadProductListValue();
        (productList && productList.length <=0) && await GetProductList();
        await this.handleLoadProductListValue();
    }

    handleLoadProductListValue=()=>{this.setState({loadProductListValue : !this.state.loadProductListValue})}

    handleFromAction=(operation, productData)=>{ this.setState({operation, productData, fromAction : !this.state.fromAction})}

    render() { 
        const { fromAction }=this.state
        return fromAction ? this.loadProductFrom() : this.loadProductTable()
    }

    loadProductFrom=()=>{
        const { productData, operation }=this.state
        return <ProductFrom 
            fromAction={this.handleFromAction}
            initialValues={productData}
            operation={operation}
        />
    }

    loadProductTable=()=>{
        const { loadProductListValue }=this.state
        return loadProductListValue ? this.loading() : this.loadingProductTable()
    }

    loading=()=><center><Loading /></center>

    loadingProductTable=()=>{
        return <ProductTable  fromAction={this.handleFromAction} />
    }
}
const mapStateToProps=(state)=>{return state;}
const mapDispatchToProps=(dispatch)=>({
    ProductAction: bindActionCreators(ProductAction, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductManagement);