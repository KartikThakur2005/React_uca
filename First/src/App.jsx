import Layout from "../component/layout/Layout"
import { rotes as Rotes } from "./rotes"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
export function App(){

     return <>
         
         <Layout>
          <main>
            <RouterProvider router={Rotes}></RouterProvider>
          </main>
         </Layout>

     </>
}