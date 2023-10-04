
import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

import NewsDetails from '../components/Header/NewsDetails';
import Resister from '../components/pages/Resister/Resister';
import Login from '../components/pages/Login/Login';
import About from '../components/pages/about/About';
import Career from '../components/pages/career/Career';
import Home from '../components/pages/Home/Home';
import PrivetRoutes from './PrivetRoutes';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
           
            {
                path: "/news/:id",
                element: <PrivetRoutes><NewsDetails></NewsDetails></PrivetRoutes>
            },
            {
                path: '/resister',
                element: <Resister></Resister>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
            path:'/about',
            element:<About></About>
            },
            {
             path: '/career',
             element:<Career></Career>
            }
        ]
    }
])

export default routes;