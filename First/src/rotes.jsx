import Product from "./Product"
import Signup from "../component/signup/Signup";
import { createBrowserRouter } from "react-router-dom";
 export const rotes = createBrowserRouter([{path: "/signup", element: <Signup></Signup>,},
  {path: "/", element: <Product></Product>,}
 ])