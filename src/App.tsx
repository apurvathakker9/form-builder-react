import React from 'react';
import routes from './utils/routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(routes)

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
