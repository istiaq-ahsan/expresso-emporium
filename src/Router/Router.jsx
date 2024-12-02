import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Front/HomePage";
import Layout from "../components/Layout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: () => fetch("http://localhost:5000/coffee")
            },
            {
                path: "addCoffee",
                element: <AddCoffee></AddCoffee>,
            },
            {
                path: "updateCoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])

export default Router;