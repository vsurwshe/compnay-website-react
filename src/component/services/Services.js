import React from 'react';

const ServiceArray=[
    {icon: "fa fa-gavel mb-4",serviceName:"Mobile applications",shortDescprtions:"We design android, IOS applications app for a customer."},
    {icon: "fa fa-paint-brush mb-4",serviceName:"web applications",shortDescprtions:"We provide such simple and attractive look web applications which can show standards of the business of people."},
    {icon: "fa fa-magic mb-4",serviceName:"24X7",shortDescprtions:"We provide solutions at any time means 24X7."},
    {icon: "fa fa-wrench mb-4",serviceName:"Logo Design",shortDescprtions:"We are also Provide Logo for new Startup Companys."},
    {icon: "fa fa-cogs mb-4",serviceName:"Software Applications",shortDescprtions:"We design the Software product in such language's  Dot Net & Java. We provide Desktop applications for Billing System."},
    {icon: "fa fa-line-chart mb-4",serviceName:"Customer Support",shortDescprtions:"We Provide the Solutions and idea for the projects in college and real time."}
]

const Services=(props)=>{
    const { ServiceArray }=props
    var itemOne, itemTwo, resultArray=[], chunk = 3;
    if(ServiceArray && ServiceArray.length >0){
        for (itemOne = 0, itemTwo = ServiceArray.length; itemOne < itemTwo; itemOne += chunk) {
            resultArray.push(ServiceArray.slice(itemOne, itemOne + chunk));
        }
    }
    return <section className="banner-bottom-w3layouts py-5" id="services">
    <div className="container py-xl-5 py-lg-3">
        <h3 className="title-w3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">Our Services</h3>
        <p className="title-para text-center mx-auto mb-sm-5 mb-4">
            We are provide services in such a way that people come again to us and use our services. In our product we provide such services, people can survive the work easily in our applications, that's why the customer comes again to us and join with us.
        </p>
        {  (resultArray && resultArray.length >0)&& 
           resultArray.map((item,key)=>{
            return <div className="row mt-lg-4" key={key}> 
                {(item && item.length >0) && item.map((subitem,key)=>{
                        return <div className="col-lg-4 about-in text-center" key={key}>
                            <div className="card">
                                <div className="card-body">
                                    <i className={subitem.icon} aria-hidden="true" />
                                    <h5 className="card-title mb-3">{subitem.serviceName}</h5>
                                    <p className="card-text">{subitem.shortDescprtions}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            })
        }            
    </div>
</section>
}

export default Services;