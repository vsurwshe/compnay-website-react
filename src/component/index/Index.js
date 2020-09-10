import React, { Component } from 'react';
import Banner from '../utilities/banner/Banner';
import AboutBottom from '../utilities/aboutBottom/AboutBottom'
import Testimonials from '../utilities/testimonials/Testimonials'
import { connect } from 'react-redux';
import CustomerProducts from '../utilities/customerproducts/CustomerProducts';
class Index extends Component {
    state = { }
    
    render() { 
        return this.loadGird();
    }

    loadGird=()=>{
        return <>
            {this.loadBanner()}
            {this.loadUserBlog()}
            {this.loadTestimonials()}
        </>
    }

    // this method will load the banner
    loadBanner=()=>{
        return <Banner />
    }

    // this method will load the index page about
    loadAboutBottom=()=>{
        const { AboutBottomArray }=this.props.CommonState
        return <AboutBottom AboutBottomArray={AboutBottomArray} />
    }

    // this method will load the users blogs
    loadUserBlog=()=>{
        const { UserBlogsArray }=this.props.CommonState
        return <CustomerProducts UserBlogsArray={UserBlogsArray} />
    }

    // this method will load the testimonials
    loadTestimonials=()=>{
        const { TestimonialsArray }=this.props.CommonState
        return <Testimonials TestimonialsArray={TestimonialsArray} />
    }
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps)(Index);