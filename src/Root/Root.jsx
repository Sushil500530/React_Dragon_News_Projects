
import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

const Root = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>
    }
])

export default Root;