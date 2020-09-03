import React from 'react';

const UserBlog=(props)=>{
    return <div class="blog-w3ls py-5 bg-light" id="blog">
    <div class="container py-xl-5 py-lg-3">
        <h3 class="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">Our Blog</h3>
        <p class="title-para text-center mx-auto mb-sm-5 mb-4">we design the following project then given follows posts or comments on our sites.</p>
        <div class="row package-grids">
            <div class="col-md-4 blog-w3">
                <div class="blogs-top">
                    <a href="single.html">
                        <img src="images/blog1.jpg" alt="" class="img-fluid" />
                    </a>
                </div>
                <div class="blogs-bottom p-4 bg-white">
                    <h4 class="text-dark mb-3">Shri Aishwarya Fiance</h4>
                    <h3 class="my-3">01 Oct 2018</h3>
                    <a href="single.html">
                        <i class="fa fa-user mr-2"></i>Posted by Anil Rakhewar</a>
                </div>
            </div>
            <div class="col-md-4 blog-w3 my-md-0 my-5">
                <div class="blogs-top">
                    <a href="single.html">
                        <img src="images/blog2.jpg" alt="" class="img-fluid" />
                    </a>
                </div>
                <div class="blogs-bottom p-4 bg-white">
                    <h4 class="text-dark">Shri Genesh Holesales Shop</h4>
                    <h3 class="my-3">01 Jun 2018</h3>
                    <a href="single.html">
                        <i class="fa fa-user mr-2"></i>Posted by Shrinivas</a>
                </div>
                
            </div>
            <div class="col-md-4 blog-w3">
                <div class="blogs-top">
                    <a href="single.html">
                        <img src="images/blog3.jpg" alt="" class="img-fluid" />
                    </a>
                </div>
                <div class="blogs-bottom p-4 bg-white">
                    <h4 class="text-dark mb-3">Yogesh Bar & Restaurant Applications</h4>
                    <h3 class="my-3">20 Oct 2018</h3>
                    <a href="single.html">
                        <i class="fa fa-user mr-2"></i>Posted by Suraj Rakhewar </a>
                </div>
                
            </div>
        </div>
        <div class="text-center">
            <a href="blog.html" class="btn button-style mt-sm-5 mt-4">Read More</a>
        </div>
    </div>
</div>
}