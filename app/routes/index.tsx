import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootError } from "../layout/error/RootError.js";
import { NormalLayout } from "../layout/NormalLayout.js";
import Brand from "./brand/Brand.js";

import Main from "./main/Main.js";
import Media from "./media/Media.js";
import CaremeDual from "./product/detail/CaremeDual.js";
import CellaticHigh from "./product/detail/CellaticHigh.js";
import CellaticMicro from "./product/detail/CellaticMicro.js";
import Product from "./product/Product.js";

export const router = createBrowserRouter([
  {
    path: "",
    element: <NormalLayout />,
    errorElement: <RootError />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },

      {
        path: "/home",
        element: <Main />,
      },

      {
        path: "/brand",
        element: <Brand />,
      },

      {
        path: "/product",
        element: <Product />,
      },

      {
        path: "/product/careme/dual",
        element: <CaremeDual />,
      },

      {
        path: "/product/cellatic/high-frequency",
        element: <CellaticHigh />,
      },

      {
        path: "/product/cellatic/micro-wave",
        element: <CellaticMicro />,
      },

      {
        path: "/media",
        element: <Media />,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
