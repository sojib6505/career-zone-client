import loginWatermark from "../../assets/videos/login.mp4"

export default function SignIn() {
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
                <form action="">
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
