import React from 'react';

const Ways=(props)=>{
    return <div className="join-w3l1 py-5">
    <div className="container py-xl-5 py-lg-3">
        <h3 className="title-w3 title-w3-3 mb-sm-5 mb-4 text-dark text-center font-weight-bold">
            We are gives great services for creative project's idea.
        </h3>
        <div className="row join-agile2 text-center pt-md-5 pt-4">
            <div className="col-md-3 steps-reach-w3l my-md-0 my-4">
                <span className="fa fa-volume-control-phone" aria-hidden="true"></span>
                <p className="mt-3">Discuss with us requirements and idea of project.</p>
                <div className="style-agile-border second-border">
                    <img src={`${process.env.PUBLIC_URL}images/sty2.png`} alt="" />
                </div>
            </div>
            <div className="col-md-3 steps-reach-w3l">
                <span className="fa fa-check-square-o" aria-hidden="true"></span>
                <p className="mt-3">Design and planed creative structure of project.</p>
                <div className="style-agile-border">
                    <img src={`${process.env.PUBLIC_URL}images/sty1.png`} alt="" />
                </div>
            </div>
            <div className="col-md-3 steps-reach-w3l">
                <span className="fa fa-calendar" aria-hidden="true"></span>
                <p className="mt-3">Date of completeion project.</p>
                <div className="style-agile-border">
                    <img src={`${process.env.PUBLIC_URL}images/sty1.png`} alt="" />
                </div>
            </div>
            <div className="col-md-3 steps-reach-w3l mt-md-0 mt-4">
                <span className="fa fa-smile-o" aria-hidden="true"></span>
                <p className="mt-3">Finally deploy & maintain the project</p>
            </div>
        </div>
    </div>
</div>
}

export default Ways;