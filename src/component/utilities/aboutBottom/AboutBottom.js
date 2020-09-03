import React from 'react';

const AboutBottom=(props)=>{
    return <div class="blog-w3ls py-5 bg-light border-bottom" id="what">
    <div class="container py-xl-5 py-lg-3">
        <h3 class="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">What we do</h3>
        <p class="title-para text-center mx-auto mb-sm-5 mb-4">We design such simple and handlable applications. which can help full for the people. thus people easily can handle our designed applications. that's why people love our designed applications.</p>
        <div class="row package-grids">
            <div class="col-md-4 blog-w3">
                <div class="blogs-top">
                    <img src="images/w1.jpg" alt="" class="img-fluid" />
                </div>
                <div class="blogs-bottom p-4 bg-white">
                    <h4 class="text-dark font-weight-bold mb-3"><i class="fa fa-google-plus mr-2"></i>Web Application's</h4>
                    {/* <a href="about.html"><i class="fa fa-line-chart mr-2"></i>Learn More</a>  */}
                </div>
            </div>
            <div class="col-md-4 blog-w3 my-md-0 my-5">
                <div class="blogs-top">
                    <img src="images/w2.jpg" alt="" class="img-fluid" />
                </div>
                <div class="blogs-bottom p-4 bg-white">
                    <h4 class="text-dark font-weight-bold mb-3"><i class="fa fa-phone mr-2"></i>Mobile Applications</h4>
                    {/* <a href="about.html"> <i class="fa fa-paint-brush mr-2"></i>Learn More</a>  */}
                </div>
            </div>
            <div class="col-md-4 blog-w3">
                <div class="blogs-top">
                    <img src="images/w3.jpg" alt="" class="img-fluid" />
                </div>
                <div class="blogs-bottom p-4 bg-white">
                    <h4 class="text-dark font-weight-bold mb-3"><i class="fa fa-gavel mr-2"></i>Software Applications</h4>
                    {/* <a href="about.html"> <i class="fa fa-gavel mr-2"></i>Learn More</a>  */}
                </div>
            </div>
        </div>
    </div>
</div>
}