
import {
  createBrowserRouter
} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { CatalogPage } from "../pages/CatalogPage.tsx";
import { ProductPage } from "../pages/ProductPage.tsx";
import { CartPage } from "../pages/CartPage.tsx";


export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomePage
      },
      {
        path: "/catalog",
        Component: CatalogPage
      },
      {
        path: "/catalog/:id",
        Component: ProductPage
      },
      {
        path: "/cart",
        Component: CartPage
      }
    ]
  }
]);