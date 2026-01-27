import Lottie from "lottie-react";
import registerAnimation from "../../assets/lottie/register.json"


export default function Register() {
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    return (
        <div className="flex flex-col md:flex-row md:min-h-screen justify-center items-center gap-10">
            <div>
                <Lottie
                  animationData={registerAnimation}
                  loop={true}
                  className="h-60 md:h-96 md:w-96 mx-auto"
                >

                </Lottie>
            </div>
            <form onSubmit={handleRegister} className="">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Register</legend>
                    <p className="text-center text-xl font-bold">Join Career Zone</p>

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />

                    <button type="submit" className="btn btn-primary hover:btn-secondary mt-4">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}
