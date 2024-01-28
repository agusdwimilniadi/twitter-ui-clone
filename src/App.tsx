import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/page';
import Profile from './Pages/Profile/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
