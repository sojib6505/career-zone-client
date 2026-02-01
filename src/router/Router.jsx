import { createBrowserRouter } from "react-router"
import RootLayout from "../Layouts/RootLayout"
import Home from "../pages/Home/Home"
import Register from "../pages/athentication/Register";
import SignIn from "../pages/athentication/SignIn";
import JobDetail from "../pages/JobDetail/JobDetail";
import Apply from "../pages/Apply/Apply";
import PrivateRoutes from "../routes/PrivateRoutes";
import UserProfile from "../pages/userProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: '/', Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: 'register', Component: Register },
            { path: 'sign_in', Component: SignIn },
            {
                path: `job_detail/:id`,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                element: <PrivateRoutes>
                    <JobDetail></JobDetail>
                </PrivateRoutes>

            },
            {
                path: 'apply/:id',
                element: <PrivateRoutes>
                    <Apply></Apply>
                </PrivateRoutes>
            }
            ,
            {
                path: 'user_profile',
                element:<PrivateRoutes>
                     <UserProfile></UserProfile>
                </PrivateRoutes>
            }
        ]
    }
])
export default router;
