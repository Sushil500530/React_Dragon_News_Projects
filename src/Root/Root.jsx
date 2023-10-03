
import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/pages/Home/Home';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])

export default routes;