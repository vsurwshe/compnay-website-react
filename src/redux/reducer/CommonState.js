const initialState={
    userList:[],
    UserBlogsArray:[
        { img:"images/blog1.jpg", companyName:"Shri Aishwarya Fiance", postedBy:"Anil Rakhewar", date:"01 Oct 2018"},
        { img:"images/blog2.jpg", companyName:"Shri Genesh Holesales Shop", postedBy:"Shrinivas", date:"01 Jun 2018"},
        { img:"images/blog3.jpg", companyName:"Yogesh Bar & Restaurant Applications", postedBy:"Suraj Rakhewar", date:"01 Oct 2018"}
    ],
    TestimonialsArray:[
        { img:"images/te1.jpg", companyName:"Anil Rakhewar-Shri Aishwarya Daily Fiance", message:"These guys are best, and his services are best to compare to another service provider. I give one project solutions to his company and these guys implement the better an easy applications for me which can handle easily."},
    ],
    ServiceArray:[
        {icon: "fa fa-mobile mb-4",serviceName:"Mobile App Development",shortDescprtions:"We design android, IOS applications app for a customer."},
        {icon: "fa fa-cloud mb-4",serviceName:"Web App Development",shortDescprtions:"We provide such simple and attractive look web applications which can show standards of the business of people."},
        {icon: "fa fa-question-circle mb-4",serviceName:"24X7",shortDescprtions:"We provide solutions at any time means 24X7."},
        {icon: "fa fa-pinterest-square mb-4",serviceName:"Logo Design",shortDescprtions:"We are also Provide Logo for new Startup Companys."},
        {icon: "fa fa-desktop mb-4",serviceName:"Desktop Software App Development",shortDescprtions:"We design the Software product in such language's  Dot Net & Java. We provide Desktop applications for Billing System."},
        {icon: "fa fa-ticket mb-4",serviceName:"Customer Support",shortDescprtions:"We Provide the Solutions and idea for the projects in college and real time."}
    ],
    AboutBottomArray:[
        { imgSrc:'images/w1.jpg', icon:'fa fa-cloud mr-2', name:'Web App Development' },
        { imgSrc:'images/w2.jpg', icon:'fa fa-mobile mr-2', name:'Mobile App Development' },
        { imgSrc:'images/w3.jpg', icon:'fa fa-desktop mr-2', name:'Desktop Software App Development' }
    ],
    teamMeats:[
        { img:"images/team2.jpg", title:"Mr. Yogesh Rakhewar", post:"Manager & Developer", socialLinks:[
            {icon:"fa fa-facebook", links:"#"},
            {icon:"fa fa-twitter", links:"#"},
            {icon:"fa fa-google", links:"#"}
            ]
        },
        { img:"images/team1.jpg", title:"Mr. Vishvanath Surwashe", post:"Designer & Developer", socialLinks:[
            {icon:"fa fa-facebook", links:"http://www.facebook.com/vsurwshe"},
            {icon:"fa fa-twitter", links:"http://twitter.com/vsurwshe"},
            {icon:"fa fa-google", links:"https://plus.google.com/117290264969352066403"}
            ]
        }
    ],
    gallery:[
        {img: "images/blog2.jpg", name:"Shrinivas", companyName:"Shri Gensh Holesales Shop"},
        {img: "images/blog1.jpg", name:"Anil Rakhewar", companyName:"Shri Aishwarya Fiance"},
        {img: "images/blog3.jpg", name:"Suraj Rakhewar", companyName:"Yogesh Bar & Restaurant"}
    ],
    productList:[]

}

const CommonState=(state = initialState, action)=>{
    switch ( action && action.type) {
        case "SAVE_USER_LIST":
            return {...state, userList: action.userList}
        case "SAVE_PRODUCT_LIST":
            return {...state, productList: action.productList}
        default:
            return state
    }
}

export default CommonState;