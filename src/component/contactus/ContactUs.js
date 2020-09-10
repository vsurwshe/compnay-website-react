import React, { Component } from 'react';
import ContactForm from './ContactFrom';

class ContactUs extends Component {
    state = {  }

    render() { 
        return this.loadContact();
    }

    loadContact=()=>{
     return <div className="contact py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">Contact Us</h3>
			<p className="title-para text-center mx-auto mb-sm-5 mb-4">We Provide services so you visit or contact us ones, and use our services.</p>
			<div className="row contact-form">
				<div className="col-lg-6 wthree-form-left">
					<ContactForm />
				</div>
                <div className="col-lg-5 contact-bottom  mt-lg-5 d-flex flex-column contact-right-w3ls px-sm-0 px-2">
				    {this.loadContactDetails()}
                </div>
			</div>
		</div>
	</div>        
    }

    loadContactDetails=()=>{
        return<>
        <div className="fv3-contact mt-lg-5">
            <span className="fa fa-envelope mr-2 mt-4"></span>
            <p>
                <a href="mailto:vsurwshe@gmail.com" className="text-dark">iamvishvanath@gmail.com</a> &
                <a href="mailto:y.rakhewar@gmail.com" className="text-dark">y.rakhewar@gmail.com</a>
            </p>
        </div>
        <div className="fv3-contact my-4">
            <span className="fa fa-phone mr-2"></span>
            <p className="text-dark">(+91)-814-964-8134</p> & 
            <p className="text-dark">(+91)-800-704-6661</p>
        </div>
        <div className="fv3-contact">
            <span className="fa fa-home mr-2"></span>
            <h2 className="text-dark">Latur-Nanded Hwy, Nanded, Maharashtra-431603.</h2>
        </div>
    </>
    }
}
 
export default ContactUs;