import React,{Component} from 'react';
import Footer from '../utilities/footer/Footer';
import NavBarTop from '../utilities/navbar/Navbar';
import Index from '../index/Index';

class MainComponent extends Component {
    state = {  }
    render() { 
        return this.loadGrid();
    }

    loadGrid=()=>{
        return <>
            <NavBarTop />
            <Index />
            <Footer />
        </>
    }
}
 
export default MainComponent;