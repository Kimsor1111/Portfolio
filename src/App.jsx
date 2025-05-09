import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import { Home, About, Skills, Portfolio, Contact } from "./page";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>This is error</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Projects",
        element: <Portfolio />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
