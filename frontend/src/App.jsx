import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Feed from './components/Feed';
import Browse from './components/Browse';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/browse',
          element: <Browse />,
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
