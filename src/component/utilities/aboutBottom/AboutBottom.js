import React from 'react';

const AboutBottom=(props)=>{
    const { AboutBottomArray }=props
    return <div className="blog-w3ls py-5 bg-light border-bottom" id="what">
    <div className="container py-xl-5 py-lg-3">
        <h3 className="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">What we do</h3>
        <p className="title-para text-center mx-auto mb-sm-5 mb-4">We design such simple and handlable applications. which can help full for the people. thus people easily can handle our designed applications. that's why people love our designed applications.</p>
        <div className="row package-grids">
            {(AboutBottomArray && AboutBottomArray.length >0 )&&AboutBottomArray.map((item,key)=>{
                return <div className="col-md-4 blog-w3" key={key}>
                        <div className="blogs-top"> <img src={item.imgSrc} alt="" className="img-fluid" /> </div>
                        <div className="blogs-bottom p-4 bg-white">
                            <h4 className="text-dark font-weight-bold mb-3">
                                <i className={item.icon} />{item.name}
                            </h4>
                            {/* <a href="about.html"><i className="fa fa-line-chart mr-2"></i>Learn More</a>  */}
                        </div>
                    </div>
                })                
            }
        </div>
    </div>
</div>
}

export default AboutBottom;