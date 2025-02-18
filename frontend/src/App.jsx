import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Toaster from "react-hot-toast"
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Feed from './components/Feed';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/',
          element: <Feed />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
