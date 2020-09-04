import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../utilities/footer/Footer';
import NavBarTop from '../utilities/navbar/Navbar';
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
            {this.RouteSwitch(this.props)}
            <Footer />
        </>
    }

    // this method will load the component which is selected
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