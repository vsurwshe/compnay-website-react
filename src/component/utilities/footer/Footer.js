
import React from 'react';

const Footer=(props)=>{
    return <footer>
    <div class="w3ls-footer-grids py-4">
        <div class="container py-xl-5 py-lg-3">
            <div class="row">
                <div class="col-lg-3 w3l-footer-logo text-center"> {FooterHeaderText(props)} </div>
                <div class="col-lg-5 w3l-footer text-lg-right text-center mt-3"> {FooterMenu(props)} </div>
                <div class="col-lg-4 w3social-icons text-lg-right text-center mt-lg-0 mt-3"> {FooterSocailLinks(props)} </div>
            </div>
            <div class="pt-lg-4 pt-3 text-center"> {FooterCopyRightText(props)} </div>
        </div>
    </div>
</footer>
}

const FooterHeaderText=(props)=>{
    return  <a class="navbar-brand font-weight-bold" href="index.php"> V & Y </a>
}

const FooterMenu=(props)=>{
    return <ul class="list-unstyled footer-nav-wthree">
        <li class="mr-3"> <a href="index.php" >Home</a> </li> 
        <li class="mr-3"> <a  href="about.php">About Us</a> </li>
        <li class="mr-3"> <a class="" href="gallery.php">Gallery</a> </li>
        <li class="mr-3"> <a class="" href="product.php">Products</a> </li>
        <li class="mr-3"> <a class="" href="blogs.php">Blogs</a> </li>
        <li class="mr-3"> <a class="" href="contact.php">Contact Us</a> </li>
    </ul>
}

const FooterSocailLinks=(props)=>{
    return <ul>
    <li> <a href="https://www.facebook.com/VY-365604737344237" target="_blank" class="rounded-circle"> <i class="fa fa-facebook-f"></i> </a> </li>
    <li class="px-2"> <a href="#" class="rounded-circle"> <i class="fa fa-google-plus"></i> </a>     </li>
    <li> <a href="#" class="rounded-circle"> <i class="fa fa-twitter"></i> </a> </li>
</ul>
}

const FooterCopyRightText=(props)=>{
    return <p class="copy-right-grids mt-lg-1">© 2018 V & Y. All Rights Reserved | Design by
    <a href="" target="_blank">W3layouts</a>
</p>
}

export default Footer;