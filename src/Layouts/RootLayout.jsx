import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


export default function RootLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
