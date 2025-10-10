import App from "../App";
import ErrorElement from "../Pages/ErrorElement";
import Favorites from "../Pages/Favorites";
import Home from "../Pages/Home";

const routes = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
        loader: () => JSON.parse(localStorage.getItem("favorites") || "[]"),
        errorElement: <ErrorElement />,
      },
    ],
  },
];

export default routes;
