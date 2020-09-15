import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '../routes/AdminRoutes';
import * as UserAction from "../../redux/actions/UserAction"
import  './Layout.scss';
import { connect } from 'react-redux';

class AdminMainLayout extends Component {
    state = {  }
    render() { 
        return this.loadLayout();
    }

    loadLayout=()=>{
        return <>
            <div className="sidebar">
                {this.loadRoutesConfig()}
            </div>
            <div className="content" style={{paddingTop:"1.5%"}}>   
                {this.loadRouteSwitch()}
            </div>
        </>
    }

    loadRoutesConfig=()=>{
        return<> 
            <center> <h1 style={{paddingTop:"5%"}}>Admin</h1> </center>
            <hr />
            {Routes.map((route,key)=><a key={key} href={route.link}><i className={route.icon}/>&nbsp;{route.text}</a>)}
            <hr />
            <a onClick={()=>this.props.UserLogout()}> <i className="fa fa-sign-out"/>Sign Out</a>
        </>
    }

    loadRouteSwitch=()=>{
        return <Switch>
            {Routes.map((route,key)=> <Route key={key} path={route.link} exact component={route.componet} />)}
        </Switch>
    }
}
const mapStateToProps=state=>{return state}
export default connect(mapStateToProps, UserAction)(AdminMainLayout);