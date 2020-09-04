import React,{Component} from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Footer from '../utilities/footer/Footer';
import NavBarTop from '../utilities/navbar/Navbar';
import Index from '../index/Index';
import * as CommonAction from "../../redux/actions/CommonActions";
import RoutesPath from '../../routes/Routes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MainComponent extends Component {
    state = {  }
    
    componentDidMount=async()=>{
        (this.props.CommonState.userList && this.props.CommonState.userList.length <=0) && await this.props.CommonAction.GetUserList(); 
    }
    
    render() { 
        return this.loadGrid();
    }

    loadGrid=()=>{
        return <>
            <NavBarTop />
            {/* <Index /> */}
            {this.RouteSwitch(this.props)}
            <Footer />
        </>
    }

    // RoutesConfig = (props) => {
    //     return <div>
    //         <nav className="navbar ">
    //             <ul className="navbar-nav">
    //                 {RoutesPath.map((route, index) => {
    //                     return <li className="nav-item" key={index}>
    //                         <Link className="nav-link" to={route.link}>{route.text}</Link>
    //                     </li>
    //                 })
    //                 }
    //             </ul>
    //         </nav>
    //     </div>
    // }

    RouteSwitch = (props) => {
        return <Switch>
            {RoutesPath.map((route, index) => {
                return <Route key={index} path={route.link} exact component={route.componet} />
            })}
        </Switch>
    }
    

}

const mapStateToProps = state => { return state; };
const mapDispatchToProps = (dispatch) => ({
    CommonAction: bindActionCreators(CommonAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);