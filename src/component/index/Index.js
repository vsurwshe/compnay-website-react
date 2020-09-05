import React, { Component } from 'react';
import Banner from '../utilities/banner/Banner';
import AboutBottom from '../utilities/aboutBottom/AboutBottom'
import Services from '../services/Services'
import Ways from '../utilities/ways/Ways'
import UserBlog from '../utilities/blog/UserBlog'
import Testimonials from '../utilities/testimonials/Testimonials'
import MidSection from '../utilities/midSection/MidSection'
class Index extends Component {
    state = {  }
    
    render() { 
        return this.loadGird();
    }

    loadGird=()=>{
        return <>
        {this.loadBanner()}
        {this.loadAboutBottom()}
        {this.loadServices()}
        {this.loadMidSection()}
        {this.loadWays()}
        {this.loadUserBlog()}
        {this.loadTestimonials()}
        </>
    }

    loadBanner=()=>{
        return <Banner />
    }

    loadAboutBottom=()=>{
        return <AboutBottom />
    }

    loadServices=()=>{
        return <Services />
    }

    loadMidSection=()=>{
        return <MidSection />
    }

    loadWays=()=>{
        return <Ways />
    }

    loadUserBlog=()=>{
        return <UserBlog />
    }

    loadTestimonials=()=>{
        return <Testimonials />
    }

}
 
export default Index;