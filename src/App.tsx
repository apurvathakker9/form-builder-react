import React from 'react';
import routes from './utils/routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from "./redux/store";
import { Provider } from 'react-redux'
import BackdropCircularProgressComponent from './components/BackdropCircularProgressComponent';
import ModalStrip from './components/ModalStrip';

function App() {

  const router = createBrowserRouter(routes)

  return (
    <>
      <Provider store={store}>
        <BackdropCircularProgressComponent />
        <ModalStrip />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
