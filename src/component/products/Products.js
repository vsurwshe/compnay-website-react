import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CommonActions from '../../redux/actions/CommonActions'
import { bindActionCreators } from 'redux';
import Loading from '../utilities/loader/Loader';

class Products extends Component {
    state = {  
        loadProductList:false
    }
    
    componentDidMount=async()=>{
        const{ productList }=this.props.CommonState
        const{ GetProductList }=this.props.CommonActions
        await this.handleLoadProductListValue();
        (productList && productList.length <=0) && await GetProductList();
        await this.handleLoadProductListValue();
    }

    handleLoadProductListValue=()=>{this.setState({ loadProductList : !this.state.loadProductList})}
    
    render() { 
        const { loadProductList }=this.state
        console.log("LO", loadProductList)
        return loadProductList ? this.loading(): this.loadProductList();
    }

    loading=()=> <Loading />

    loadProductList=()=>{
        return <h1>Products</h1>
    }
    
}

const mapStateToProps = state => { return state; };
const mapDispatchToProps = (dispatch) => ({
    CommonActions: bindActionCreators(CommonActions, dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(Products);