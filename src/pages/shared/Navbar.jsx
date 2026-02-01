import { NavLink } from "react-router"
import useAuth from "../../hooks/useAuth"

export default function Navbar() {
    const {user,firebaseLoading} = useAuth()
    console.log(user)
    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        {/* <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}
                        <li><NavLink>Find a Job</NavLink></li>
                        <li><NavLink>Recruiters</NavLink></li>
                        <li><NavLink>Candidates</NavLink></li>
                        <li><NavLink to='/application'>My Application</NavLink></li>
                        <li><NavLink>Recruiters</NavLink></li>
                        <li><NavLink>About Us</NavLink></li>
                    </ul>
                </div>
                {/* Nav---Logo */}
                <NavLink>
                    <h1 className="text-2xl font-bold">Career Zone</h1>
                </NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold ">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink>Find a Job</NavLink></li>
                    <li><NavLink>Recruiters</NavLink></li>
                    <li><NavLink>Candidates</NavLink></li>
                    <li><NavLink to='/application'>My Application</NavLink></li>
                    <li><NavLink>Recruiters</NavLink></li>
                    <li><NavLink>About Us</NavLink></li>
                </ul>
            </div>
            
            {
            firebaseLoading? <p className="navbar-end">loading........</p> :
            user ? <NavLink to='/user_profile' className="navbar-end">user!!</NavLink> :
               <div className="navbar-end flex gap-2">
                <NavLink to='/register' className='underline'>Register</NavLink>
                <NavLink to='/sign_in' className='btn btn-primary hover:btn-secondary'>SignIn</NavLink>
            </div>
            }
        </div>
    )
}
