
import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/pages/Home/Home';
import NewsDetails from '../components/Header/NewsDetails';
import Resister from '../components/pages/Resister/Resister';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
            path:"/categories/:id",
            element:<NewsDetails></NewsDetails>
            },
            {
            path: '/resister' ,
            element: <Resister></Resister>
            }
        ]
    }
])

export default routes;