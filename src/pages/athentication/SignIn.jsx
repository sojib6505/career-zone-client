import { use } from "react"
import loginWatermark from "../../assets/videos/login.mp4"
import AuthContext from "../../context/AuthContext"
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

export default function SignIn() {
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from || '/'
    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('signIn',email)
        signIn(email, password)
            .then((userCredential) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SignIn Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from)
                console.log(userCredential.user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <div className="flex flex-col md:flex-row md:min-h-screen justify-center items-center gap-10">
            <div>
                <video src={loginWatermark}
                    autoPlay
                    loop
                    muted
                    className="h-70 md:h-screen"
                ></video>
            </div>
            {/* login form */}
            <div>
                <form onSubmit={handleSignIn} actio="">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">SignIn</legend>
                        <p className="text-center text-xl font-bold">Join Career Zone</p>

                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />

                        <button type="submit" className="btn btn-primary hover:btn-secondary mt-4">SignIn</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
