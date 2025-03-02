import Home from "./Home";
import Plants from "./Plants";
import App from "../../App";
// import Imagery from "./Imagery";
import Weather from "./Weather";
// import Partners from "./Partners";
import ErrorPage from "./ErrorPage";
import Onions from "../routes/Onions";
import Corn from "./Corn";
import Lettuce from "./Lettuce";
import SweetPotatoes from "./SweetPotateos";
import Carrots from "./Carrots";
import Simulation from "./simulation";  
const routes = [{
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            text: 'HOME',
            element: <Home />,
        },
        {
            path: "plants",
            text: "PLANTS",
            element: <Plants />,
            children: [
                {
                    path: 'corn',
                    element: <Corn />
                },
                {
                    path: 'lettuce',
                    element: <Lettuce />,
                },
                {
                    path: 'sweet potatoes',
                    element: <SweetPotatoes />,
                },
                {
                    path: 'carrots',
                    element: <Carrots />,
                    
                },
                {
                    path: 'onions',
                    element: <Onions />,
                }
            ]
        },
        // {
        //     path: 'imagery',
        //     text: 'IMAGERY',
        //     element: <Imagery />,
        // },
        {
            path: 'weather',
            text: 'WEATHER',
            element: <Weather />,
        },
        // {
        //     path: 'partners',
        //     text: 'PARTNERS',
        //     element: <Partners />,
        // },
        {
            path: "simulation",  // New tab for the p5.js sketch
            text: "SIMULATION",
            element: <Simulation />,  // This renders your p5.js sketch
        }
    ]
}];


export default routes;