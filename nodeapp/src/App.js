import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './components/AddProduct';

const App = () => {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/add',
    element: <AddProduct/>,
  }
]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App