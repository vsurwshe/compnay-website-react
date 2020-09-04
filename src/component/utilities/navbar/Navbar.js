import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import RoutesPath from '../../../routes/Routes';

const NavBarTop=(props)=>{
    return  <div className="main-top py-1">
    <nav className="navbar navbar-expand-lg navbar-light fixed-navi">
    	<div className="container-fluid">
			<a className="navbar-brand font-weight-bold" href="index.php"> V & Y </a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
			<div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
    			{NavBarMenu(props)}
			</div>
		</div>
	</nav>
</div>
}

const NavBarMenu=(props)=>{
    return <ul className="navbar-nav ml-lg-auto">
         {RoutesPath.map((route, index) => {
                return <li className="nav-item  mx-xl-5 mx-lg-3 my-lg-0 my-3" key={index}>
                    <Link className="nav-link" to={route.link}>{route.text}</Link>
                </li>
            })
        }
    {/* <li className="nav-item"> <a className="nav-link" href="index.php">Home </a> </li>
    <li className="nav-item mx-xl-5 mx-lg-3 my-lg-0 my-3"> <a className="nav-link" href="about.php">About Us </a> </li>
    <li className="nav-item mx-xl-5 mx-lg-3 mt-lg-0 mt-3"> <a className="nav-link" href="gallery.php">Gallery</a> </li>
    <li className="nav-item mx-xl-5 mx-lg-3 mt-lg-0 mt-3"> <a className="nav-link" href="product.php">Products</a> </li>
    <li className="nav-item mx-xl-5 mx-lg-3 mt-lg-0 mt-3"> <a className="nav-link" href="blogs.php">Our Blogs</a> </li>
    <li className="nav-item mt-lg-0 mt-3"> <a className="nav-link" href="contact.php">Contact Us</a> </li> */}
    <li className="search my-lg-0 my-4">{NavBarSerach(props)}</li>
    {/* <li className="ml-lg-4 mb-lg-0 mb-4"> <a href="contact.php" className="reqe-button">Contact Us</a></li> */}
</ul>
}

const NavBarSerach=(props)=>{
    return <>
    <a className="play-icon popup-with-zoom-anim" href="#small-dialog"><i className="fa fa-search" aria-hidden="true"></i></a>
        <div id="small-dialog" className="mfp-hide">
                <div className="search-top">
                    <div className="search-inn">
                    <form action="#" method="post" className="disply-flex">
                         <input className="form-control" type="search" name="search" placeholder="Serach....." required />
                        <button className="btn2"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                    </form>
                    <p className="text-white font-weight-bold mt-4">V & Y</p>
                </div>
            </div>
        </div>
    </>
}

export default NavBarTop;