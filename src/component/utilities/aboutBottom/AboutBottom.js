import React from 'react';

const AboutBottom=(props)=>{
    return <div className="blog-w3ls py-5 bg-light border-bottom" id="what">
    <div className="container py-xl-5 py-lg-3">
        <h3 className="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">What we do</h3>
        <p className="title-para text-center mx-auto mb-sm-5 mb-4">We design such simple and handlable applications. which can help full for the people. thus people easily can handle our designed applications. that's why people love our designed applications.</p>
        <div className="row package-grids">
            <div className="col-md-4 blog-w3">
                <div className="blogs-top">
                    <img src="images/w1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="blogs-bottom p-4 bg-white">
                    <h4 className="text-dark font-weight-bold mb-3"><i className="fa fa-google-plus mr-2"></i>Web Application's</h4>
                    {/* <a href="about.html"><i className="fa fa-line-chart mr-2"></i>Learn More</a>  */}
                </div>
            </div>
            <div className="col-md-4 blog-w3 my-md-0 my-5">
                <div className="blogs-top">
                    <img src="images/w2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="blogs-bottom p-4 bg-white">
                    <h4 className="text-dark font-weight-bold mb-3"><i className="fa fa-phone mr-2"></i>Mobile Applications</h4>
                    {/* <a href="about.html"> <i className="fa fa-paint-brush mr-2"></i>Learn More</a>  */}
                </div>
            </div>
            <div className="col-md-4 blog-w3">
                <div className="blogs-top">
                    <img src="images/w3.jpg" alt="" className="img-fluid" />
                </div>
                <div className="blogs-bottom p-4 bg-white">
                    <h4 className="text-dark font-weight-bold mb-3"><i className="fa fa-gavel mr-2"></i>Software Applications</h4>
                    {/* <a href="about.html"> <i className="fa fa-gavel mr-2"></i>Learn More</a>  */}
                </div>
            </div>
        </div>
    </div>
</div>
}

export default AboutBottom;