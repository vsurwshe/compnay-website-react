import BlogManagement from "../blog/BlogManagement";
import AdminDashboard from "../dashboard/adminDashboard";
import GalleryManagment from "../gallery/GalleryManagement";
import ProductManagement from "../product/ProductManagement";

export default [
    {
        link:"/admin/",
        text:"Dashboard",
        componet: AdminDashboard,
        icon:"fa fa-tachometer"

    },
    {
        link:"/admin/blogs",
        text:"Blogs",
        componet: BlogManagement,
        icon:"fa fa-bold"
    },
    {
        link:"/admin/gallery",
        text:"Gallery",
        componet: GalleryManagment,
        icon:"fa fa-picture-o"
    },
    {
        link:"/admin/products",
        text:"Products",
        componet: ProductManagement,
        icon:"fa fa-product-hunt"
    }
]