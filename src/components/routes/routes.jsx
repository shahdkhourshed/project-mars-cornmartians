import Home from "./Home";
import Plants from "./Plants";
import App from "../../App";
// import Imagery from "./Imagery";
import Weather from "./Weather";
// import Partners from "./Partners";
import ErrorPage from "./ErrorPage";
import OnionsPage from "./Onions";
import Corn from "./Corn";
import Moon from "../routes/moons/Moon";
import Rover from "../routes/rovers/Rover";
import Satellite from "../routes/satellites/Satellite";
import Lettuce from "./moons/Lettuce";
import SweetPotatoesCategory from "./rovers/SweetPotateosCategory";
import Carrots from "./satellites/Carrots";
import RoversSubcategory from "./rovers/RoversSubcategory";
import SatellitesSubcategory from "./satellites/SatelliteSubcategory";

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
                    children: [
                        {
                            path: ':moonId',
                            element: <Moon />,
                        }
                    ]
                },
                {
                    path: 'sweet potatoes',
                    element: <SweetPotatoesCategory />,
                    children: [
                        {
                            path: ':subcategory',
                            element: <RoversSubcategory />,
                            children: [
                                {
                                    path: ':roverId',
                                    element: <Rover />,
                                },
                            ]
                        }]
                },
                {
                    path: 'carrots',
                    element: <Carrots />,
                    children: [
                        {
                            path: ':subcategory',
                            element: <SatellitesSubcategory />,
                            children: [
                                {
                                    path: ':satelliteId',
                                    element: <Satellite />,
                                }
                            ],
                        },
                    ]
                },
                {
                    path: 'onions',
                    element: <OnionsPage />,
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
    ]
}];


export default routes;