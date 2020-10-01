import Index from '../component/index/Index';
import AboutUs from '../component/aboutus/AboutUs'
import Gallery from '../component/gallery/Gallery'
import Products from '../component/products/Products';
import Blogs from '../component/blogs/Blogs'
import ContactUs from '../component/contactus/ContactUs'
import Login from '../component/login/Login';

export default [
    {
        link:"/",
        text:"Home",
        componet: Index
    },
    {
        link:"/aboutus",
        text:"About Us",
        componet: AboutUs
    },
    {
        link:"/gallery",
        text:"Gallery",
        componet: Gallery
    },
    {
        link:"/products",
        text:"Products",
        componet: Products
    },
    {
        link:"/blogs",
        text:"Our Blogs",
        componet: Blogs
    },
    {
        link:"/contactus",
        text:"Contact Us",
        componet: ContactUs,
        dontCall: true
    },
    {
        link:"/login",
        text:"",
        componet: Login,
        dontCall: true
    }
]