import React, { Component } from 'react';
import Banner from '../utilities/banner/Banner';
import AboutBottom from '../utilities/aboutBottom/AboutBottom'
import Services from '../services/Services'
import Ways from '../utilities/ways/Ways'
import UserBlog from '../utilities/blog/UserBlog'
import Testimonials from '../utilities/testimonials/Testimonials'
import MidSection from '../utilities/midSection/MidSection'
class Index extends Component {
    state = { 
        UserBlogsArray:[
            { img:"images/blog1.jpg", companyName:"Shri Aishwarya Fiance", postedBy:"Anil Rakhewar", date:"01 Oct 2018"},
            { img:"images/blog2.jpg", companyName:"Shri Genesh Holesales Shop", postedBy:"Shrinivas", date:"01 Jun 2018"},
            { img:"images/blog3.jpg", companyName:"Yogesh Bar & Restaurant Applications", postedBy:"Suraj Rakhewar", date:"01 Oct 2018"}
        ],
        TestimonialsArray:[
            { img:"images/te1.jpg", companyName:"Anil Rakhewar-Shri Aishwarya Daily Fiance", message:"These guys are best, and his services are best to compare to another service provider. I give one project solutions to his company and these guys implement the better an easy applications for me which can handle easily."},
        ],
        ServiceArray:[
            {icon: "fa fa-mobile mb-4",serviceName:"Mobile App Development",shortDescprtions:"We design android, IOS applications app for a customer."},
            {icon: "fa fa-cloud mb-4",serviceName:"Web App Development",shortDescprtions:"We provide such simple and attractive look web applications which can show standards of the business of people."},
            {icon: "fa fa-question-circle mb-4",serviceName:"24X7",shortDescprtions:"We provide solutions at any time means 24X7."},
            {icon: "fa fa-pinterest-square mb-4",serviceName:"Logo Design",shortDescprtions:"We are also Provide Logo for new Startup Companys."},
            {icon: "fa fa-desktop mb-4",serviceName:"Desktop Software App Development",shortDescprtions:"We design the Software product in such language's  Dot Net & Java. We provide Desktop applications for Billing System."},
            {icon: "fa fa-ticket mb-4",serviceName:"Customer Support",shortDescprtions:"We Provide the Solutions and idea for the projects in college and real time."}
        ],
        AboutBottomArray:[
            { imgSrc:'images/w1.jpg', icon:'fa fa-cloud mr-2', name:'Web App Development' },
            { imgSrc:'images/w2.jpg', icon:'fa fa-mobile mr-2', name:'Mobile App Development' },
            { imgSrc:'images/w3.jpg', icon:'fa fa-desktop mr-2', name:'Desktop Software App Development' }
        ]
    }
    
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

    // this method will load the banner
    loadBanner=()=>{
        return <Banner />
    }

    // this method will load the index page about
    loadAboutBottom=()=>{
        const { AboutBottomArray }=this.state
        return <AboutBottom AboutBottomArray={AboutBottomArray} />
    }

    // this method will load the services 
    loadServices=()=>{
        const { ServiceArray }=this.state
        return <Services ServiceArray={ServiceArray} />
    }

    // this method will loaing mid section
    loadMidSection=()=>{
        return <MidSection />
    }

    // this method will loading steps
    loadWays=()=>{
        return <Ways />
    }

    // this method will load the users blogs
    loadUserBlog=()=>{
        const { UserBlogsArray }=this.state
        return <UserBlog UserBlogsArray={UserBlogsArray} />
    }

    // this method will load the testimonials
    loadTestimonials=()=>{
        const { TestimonialsArray }=this.state
        return <Testimonials TestimonialsArray={TestimonialsArray} />
    }
}
 
export default Index;