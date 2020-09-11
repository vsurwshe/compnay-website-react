import React from 'react';
import { Link } from 'react-router-dom';
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
            return !route.dontCall ? <li className="nav-item  mx-xl-5 mx-lg-3 my-lg-0 my-3" key={index}>
                <Link className="nav-link" to={route.link}>{route.text}</Link>
            </li> :""
        })
    }
    <li className="search my-lg-0 my-4">{NavBarSerach(props)}</li>
    <li class="ml-lg-4 mb-lg-0 mb-4">
    <Link className="nav-link" to="/contactus">Contact US</Link>
    </li>
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
                    <p className="text-white font-weight-bold mt-4">V & Y Soft. Pvt. Ltd.</p>
                </div>
            </div>
        </div>
    </>
}

export default NavBarTop;