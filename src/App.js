import React from 'react';
import { connect } from 'react-redux';
import AdminMainLayout from './adminComponent/mainLayout/adminMainLayout';
import MainComponent from './component/mainLayout/MainComponent';

const App=(props)=> { 
    const { authrization }=props.UserState
    if(authrization && authrization !==""){
        return <AdminMainLayout />
    }
    return  <MainComponent /> 
} 

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps)(App);
