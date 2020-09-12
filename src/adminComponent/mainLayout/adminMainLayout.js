import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '../routes/AdminRoutes';
import  './Layout.scss';
class AdminMainLayout extends Component {
    state = {  }
    render() { 
        return this.loadLayout();
    }

    loadLayout=()=>{
        return <>
            <div class="sidebar">
                {this.loadRoutesConfig()}
            </div>
            <div class="content" style={{paddingTop:"1.5%"}}>   
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
            <a> <i className="fa fa-sign-out" />&nbsp;Sign Out</a>
        </>
    }

    loadRouteSwitch=()=>{
        return <Switch>
            {Routes.map((route,key)=> <Route key={key} path={route.link} exact component={route.componet} />)}
        </Switch>
    }
}
 
export default AdminMainLayout;