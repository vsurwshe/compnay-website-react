import React from 'react';

const Testimonials=(props)=>{
    return <div class="testimonials text-center py-5" id="testi">
    <div class="container py-xl-5 py-lg-3">
        <h3 class="title-w3 mb-5 text-white text-center font-weight-bold">Testimonials</h3>
        <div id="carouselExampleIndicators" class="carousel slide pb-5" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> 
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="w3_testimonials_grid">
                        <img src="images/te1.jpg" alt=" " class="img-fluid rounded-circle" />
                        <h5 class="mt-3 text-white">Anil Rakhewar-Shri Aishwarya Daily Fiance</h5>
                        <h4 class="mx-auto mt-4 text-light">These guys are best, and his services are best to compare to another service provider. I give one project solutions to his company and these guys implement the better an easy applications for me which can handle easily.
                        </h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="w3_testimonials_grid">
                        <img src="images/te2.jpg" alt=" " class="img-fluid rounded-circle" />
                        <h5 class="mt-3 text-white">Petey Cruiser - Sed do eiusmod</h5>
                        <h4 class="mx-auto mt-4 text-light">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                            quo minus
                            id quod possimus,
                            omnis voluptas.
                        </h4>
                    </div>
                </div> 
                <div class="carousel-item">
                    <div class="w3_testimonials_grid">
                        <img src="images/te3.jpg" alt=" " class="img-fluid rounded-circle" />
                        <h5 class="mt-3 text-white">Speed Wagon - Sed do eiusmod</h5>
                        <h4 class="mx-auto mt-4 text-light">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
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