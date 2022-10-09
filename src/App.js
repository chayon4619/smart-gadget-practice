import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Home from './components/Home';
import Main from './components/Main';
import Shop from './components/Shop';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    loader: async () => fetch('product.json'),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>

    </div>
  );
}

export default App;
