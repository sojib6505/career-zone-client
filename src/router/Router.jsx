import { createBrowserRouter } from "react-router"
import RootLayout from "../Layouts/RootLayout"
import Home from "../pages/Home/Home"
import Register from "../pages/athentication/Register";
import SignIn from "../pages/athentication/SignIn";
import JobDetail from "../pages/JobDetail/JobDetail";

const router = createBrowserRouter([
    {
        path: '/', Component: RootLayout,
        children: [
            { index: true, Component: Home },
            {path:'register',Component: Register},
            {path:'sign_in',Component:SignIn},
            {   
                path:`job_detail/:id`,
                loader:({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
                element: <JobDetail></JobDetail>
               
            }
        ]
    }
])
export default router;
