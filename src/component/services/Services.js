import React from 'react';

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
        {(resultArray && resultArray.length >0)&& 
            resultArray.map((item,key)=>{
                return <div className="row mt-lg-4" key={key}> 
                    {(item && item.length >0) && item.map((subitem,key)=>ServiceItem(subitem,key))}
                </div>
         })}            
    </div>
</section>
}

const ServiceItem=(itemData,key)=>{
    return <div className="col-lg-4 about-in text-center" key={key}>
    <div className="card">
        <div className="card-body">
            <i className={itemData.icon} aria-hidden="true" />
            <h5 className="card-title mb-3">{itemData.serviceName}</h5>
            <p className="card-text">{itemData.shortDescprtions}</p>
        </div>
    </div>
</div>
}

export default Services;