
import React from 'react';
import { Link } from 'react-router-dom';
import RoutesPath from '../../../routes/Routes';

const Footer=(props)=>{
    return <footer>
    <div className="w3ls-footer-grids py-4">
        <div className="container py-xl-5 py-lg-3">
            <div className="row">
                <div className="col-lg-3 w3l-footer-logo text-center"> {FooterHeaderText(props)} </div>
                <div className="col-lg-6 w3l-footer text-lg-right text-center mt-3"> {FooterMenu(props)} </div>
                <div className="col-lg-3 w3social-icons text-lg-right text-center mt-lg-0 mt-3"> {FooterSocailLinks(props)} </div>
            </div>
            <div className="pt-lg-4 pt-3 text-center"> {FooterCopyRightText(props)} </div>
        </div>
    </div>
</footer>
}

const FooterHeaderText=(props)=>{
    return  <a className="navbar-brand font-weight-bold" href="index.php"> V & Y </a>
}

const FooterMenu=(props)=>{
    return <ul className="list-unstyled footer-nav-wthree">
        {   RoutesPath.map((route, index) => {
                return <li className="mr-3" key={index}>
                    <Link to={route.link}>{route.text}</Link>
                </li>
            })
        }
    </ul>
}

const FooterSocailLinks=(props)=>{
    return <ul>
    <li className="px-2"><a href="https://www.facebook.com/VY-365604737344237" target="_blank" rel="noopener noreferrer" className="rounded-circle"> <i className="fa fa-facebook-f"></i> </a> </li>
    <li className="px-2"><a href="/" className="rounded-circle"> <i className="fa fa-google-plus"></i> </a>     </li>
    <li className="px-2"><a href="/" className="rounded-circle"> <i className="fa fa-twitter"></i> </a> </li>
</ul>
}

const FooterCopyRightText=(props)=>{
    return <p className="copy-right-grids mt-lg-1">© 2018 V & Y. All Rights Reserved | Design by
    <a href="/" target="_blank">&nbsp;V & Y Soft. Tech. Pvt. Ltd.</a>
</p>
}

export default Footer;