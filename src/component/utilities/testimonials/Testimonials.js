import React from 'react';

const Testimonials=(props)=>{
    const { TestimonialsArray }= props
    return <div className="testimonials text-center py-5" id="testi">
    <div className="container py-xl-5 py-lg-3">
        <h3 className="title-w3 mb-5 text-white text-center font-weight-bold">Customer's Feedback</h3>
        <div id="carouselExampleIndicators" className="carousel slide pb-5" data-ride="carousel">
            <ol className="carousel-indicators">
                {(TestimonialsArray && TestimonialsArray.length >0)&& TestimonialsArray.map((item,key)=><li key={key} data-target="#carouselExampleIndicators" className="active" data-slide-to={key} />)}
            </ol>
            <div className="carousel-inner">
            { (TestimonialsArray && TestimonialsArray.length >0)&& 
              TestimonialsArray.map((item,key)=>{
                return <div className="carousel-item active" key={key}>
                    <div className="w3_testimonials_grid">
                        <img src={item.img} alt=" " className="img-fluid rounded-circle" />
                        <h5 className="mt-3 text-white">{item.companyName}</h5>
                        <h4 className="mx-auto mt-4 text-light">{item.message}</h4>
                    </div>
                </div>})
            }
            </div>
        </div>
    </div>
</div>
}

export default Testimonials;