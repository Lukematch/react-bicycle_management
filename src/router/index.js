import React , { lazy , Suspense } from "react";
import { Navigate } from "react-router-dom";
import Home from '../pages/home'


const Buttons = lazy(()=>import("../pages/ui/buttons"))
const Modals = lazy(()=>import("../pages/ui/modals"))
const Loadings = lazy(()=>import("../pages/ui/loadings"))
const Notification = lazy(()=>import("../pages/ui/notification"))
const Messages = lazy(()=>import("../pages/ui/messages"))
const Tabs = lazy(()=>import("../pages/ui/tabs"))
const Gallery = lazy(()=>import("../pages/ui/gallery"))
const Carousel = lazy(()=>import("../pages/ui/carousel"))
const Login = lazy(()=>import("../pages/form/login"))
const Reg = lazy(()=>import("../pages/form/reg"))
const Basic = lazy(()=>import("../pages/table/basic"))
const High = lazy(()=>import("../pages/table/high"))
const Rich = lazy(()=>import("../pages/rich"))
const City = lazy(()=>import("../pages/city"))
const Detail = lazy(()=>import("../pages/detail"))
const User = lazy(()=>import("../pages/user"))
const BikeMap = lazy(()=>import("../pages/bikeMap"))
const Bar = lazy(()=>import("../pages/charts/bar"))
const Pie = lazy(()=>import("../pages/charts/pie"))
const Line = lazy(()=>import("../pages/charts/line"))
const Permission = lazy(()=>import("../pages/permission"))

const withLoadingComponent = (comp) => (
    <Suspense fallback={<div>Loading...</div>}>
        {comp}
    </Suspense>
)

const routes = [
    {
        path:"/",
        element:<Navigate to="/home" />
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/ui",
        children:[
            {
                path:"/ui/buttons",
                element:withLoadingComponent(<Buttons/>)
            },
            {
                path:"/ui/modals",
                element:withLoadingComponent(<Modals/>)
            },
            {
                path:"/ui/loadings",
                element:withLoadingComponent(<Loadings/>)
            },
            {
                path:"/ui/notification",
                element:withLoadingComponent(<Notification/>)
            },
            {
                path:"/ui/messages",
                element:withLoadingComponent(<Messages/>)
            },
            {
                path:"/ui/tabs",
                element:withLoadingComponent(<Tabs/>)
            },
            {
                path:"/ui/gallery",
                element:withLoadingComponent(<Gallery/>)
            },
            {
                path:"/ui/carousel",
                element:withLoadingComponent(<Carousel/>)
            }
        ]
    },
    {
        path:"/form",
        children:[
            {
                path:"/form/login",
                element:withLoadingComponent(<Login/>)
            },
            {
                path:"/form/reg",
                element:withLoadingComponent(<Reg/>)
            },
        ]
    },
    {
        path:"/table",
        children:[
            {
                path:"/table/basic",
                element:withLoadingComponent(<Basic/>)
            },
            {
                path:"/table/high",
                element:withLoadingComponent(<High/>)
            },
        ]
    },
    {
        path:"/rich",
        element:withLoadingComponent(<Rich/>)
    },
    {
        path:"/city",
        element:withLoadingComponent(<City/>)
    },
    {
        path:"/detail",
        element:withLoadingComponent(<Detail/>)
    },
    {
        path:"/user",
        element:withLoadingComponent(<User/>)
    },
    {
        path:"/bikeMap",
        element:withLoadingComponent(<BikeMap/>)
    },
    {
        path:"/charts",
        children:[
            {
                path:"/charts/bar",
                element:withLoadingComponent(<Bar/>)
            },
            {
                path:"/charts/pie",
                element:withLoadingComponent(<Pie/>)
            },
            {
                path:"/charts/line",
                element:withLoadingComponent(<Line/>)
            },
        ]
    },
    {
        path:"/permission",
        element:withLoadingComponent(<Permission/>)
    },


    {
        path:"*",
        element:<Home/>
    }

]

export default routes