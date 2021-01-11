import React,{Component} from 'react';
import AboutBottom from '../utilities/aboutBottom/AboutBottom';
import { connect } from 'react-redux';
import Services from '../services/Services';
import MidSection from '../utilities/midSection/MidSection';
import Ways from '../utilities/ways/Ways';

class AboutUs extends Component {
    state = {  }
    render() { 
        return <>
        {this.loadAboutSection()}
        {this.loadBottomUp()}
        {this.loadServices()}
        {this.loadMidSection()}
        {this.loadWays()}
        {this.loadTeamMeats()}
        </>
    }

    loadBottomUp=()=>{
        const { AboutBottomArray }=this.props.CommonState
        return <AboutBottom AboutBottomArray={AboutBottomArray} />
    }

    loadAboutSection=()=>{
        return <div className="inner-sec-w3ls py-5">
		    <div className="container py-xl-5 py-lg-3">
		    	<div className="row">
		    		<div className="col-lg-6 about-img">
		    			<img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/main.jpg`} alt="" />
		    		</div>
		    		<div className="col-lg-6 about-right mt-xl-5 mt-lg-3 mt-sm-5 mt-4 pt-lg-2">
		    			<h2 className="sub-tittle text-uppercase font-weight-bold">About Us</h2>
		    			<h1 className="tittle mt-2">We Do Great Design For Creative Application.</h1>
		    			<p className="mt-4">
                            We are an experienced developer in IT company sector, and we see what happen when the customer has given some project to IT companies. they face the issue. so we provide such services, the customer can give us requirement and we make simple an easy without any issue software. we design websites and applications for the customers which can affordable price and use easy.
                        </p>
		    			{/* <a href="blog.html" className="btn button-style mt-sm-5 mt-4">Read More</a> */}
		    		</div>
		    	</div>
		    </div>
	    </div>
    }

    // this method will load the services 
    loadServices=()=>{
        const { ServiceArray }=this.props.CommonState
        return <Services ServiceArray={ServiceArray} />
    }

    loadTeamMeats=()=>{
        const { teamMeats }= this.props.CommonState
        var itemOne, itemTwo, resultArray=[], chunk = 3;
        if(teamMeats && teamMeats.length >0){
            for (itemOne = 0, itemTwo = teamMeats.length; itemOne < itemTwo; itemOne += chunk) {
                resultArray.push(teamMeats.slice(itemOne, itemOne + chunk));
            }
        }
        return <div className="team bg-light py-5">
		    <div className="container py-xl-5 py-lg-3">
		    	<h3 className="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">Our Team Members</h3>
		    	<p className="title-para text-center mx-auto mb-sm-5 mb-4">Following are the team member which can build this company from bottom to upwards. This Person can help our organizations make respectfully and responsibly.</p>
                    {(resultArray && resultArray.length >0) && resultArray.map((item,key)=>{
                        return <div className="row mt-30" key={key}>
                            {(item && item.length >0) && item.map((subitem,key)=>{
                                return <div className="col-lg-4" key={key}>
                                    <div className="box16">
                                        <img src={subitem.img} alt="" className="img-fluid" />
                                        <div className="box-content">
                                            <h3 className="title">{subitem.title}</h3>
                                            <span className="post">({subitem.post})</span>
                                            <ul className="social">
                                                {(subitem && subitem.socialLinks && subitem.socialLinks.length >0) && subitem.socialLinks.map((data,key)=>{
                                                    return <li key={key}><a href={data.links}><i className={data.icon} /></a></li> 
                                                })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    })}
		    </div>
	    </div>
    }

    // this method will loaing mid section
    loadMidSection=()=>{
        return <MidSection />
    }

    // this method will loading steps
    loadWays=()=>{
        return <Ways />
    }
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps)(AboutUs);