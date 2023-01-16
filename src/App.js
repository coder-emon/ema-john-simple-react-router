import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layouts/Main";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import { ProductAndCartLoader } from "./Components/Loaders/ProductAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: ProductAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <h1>inventory</h1>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
