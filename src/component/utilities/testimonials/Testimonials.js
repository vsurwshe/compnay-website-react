import React from 'react';

const Testimonials=(props)=>{
    return <div className="testimonials text-center py-5" id="testi">
    <div className="container py-xl-5 py-lg-3">
        <h3 className="title-w3 mb-5 text-white text-center font-weight-bold">Testimonials</h3>
        <div id="carouselExampleIndicators" className="carousel slide pb-5" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> 
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="w3_testimonials_grid">
                        <img src="images/te1.jpg" alt=" " className="img-fluid rounded-circle" />
                        <h5 className="mt-3 text-white">Anil Rakhewar-Shri Aishwarya Daily Fiance</h5>
                        <h4 className="mx-auto mt-4 text-light">These guys are best, and his services are best to compare to another service provider. I give one project solutions to his company and these guys implement the better an easy applications for me which can handle easily.
                        </h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="w3_testimonials_grid">
                        <img src="images/te2.jpg" alt=" " className="img-fluid rounded-circle" />
                        <h5 className="mt-3 text-white">Petey Cruiser - Sed do eiusmod</h5>
                        <h4 className="mx-auto mt-4 text-light">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                            quo minus
                            id quod possimus,
                            omnis voluptas.
                        </h4>
                    </div>
                </div> 
                <div className="carousel-item">
                    <div className="w3_testimonials_grid">
                        <img src="images/te3.jpg" alt=" " className="img-fluid rounded-circle" />
                        <h5 className="mt-3 text-white">Speed Wagon - Sed do eiusmod</h5>
                        <h4 className="mx-auto mt-4 text-light">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                            quo minus
                            id quod possimus,
                            omnis voluptas.
                        </h4>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
}

export default Testimonials;