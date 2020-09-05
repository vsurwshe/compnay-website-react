import React from 'react';

const UserBlog=(props)=>{
    const {UserBlogsArray }=props
    return <div className="blog-w3ls py-5 bg-light" id="blog">
    <div className="container py-xl-5 py-lg-3">
        <h3 className="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">Customer's Products </h3>
        <p className="title-para text-center mx-auto mb-sm-5 mb-4">
            We designed the following list of project with develope and depolye on client sides.
        </p>
        <div className="row package-grids" >
        {(UserBlogsArray && UserBlogsArray.length >0) && 
          UserBlogsArray.map((item,key)=>{
            return <div className="col-md-4 blog-w3" key={key}>
                    <div className="blogs-top">
                        <a href="single.html">
                            <img src={item.img} alt="" className="img-fluid" />
                        </a>
                    </div>
                    <div className="blogs-bottom p-4 bg-white">
                        <h4 className="text-dark mb-3">{item.companyName}</h4>
                        <h3 className="my-3">{item.date}</h3>
                        <a href="single.html">
                            <i className="fa fa-user mr-2" />
                            Posted by {item.postedBy}
                        </a>
                    </div>
                </div>
            })
        }
        </div>
        {/* <div className="text-center"> <a href="blog.html" className="btn button-style mt-sm-5 mt-4">Read More</a> </div> */}
    </div>
</div>
}

export default UserBlog;