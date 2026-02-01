
import { useNavigate, useParams } from "react-router"
import useAuth from "../../hooks/useAuth"

import axios from "axios"
import Swal from "sweetalert2"

export default function Apply() {
    const { user, firebaseLoading } = useAuth()
    const { id } = useParams()
    const navigate = useNavigate()
    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const github = form.github.value;
        const linkedIn = form.linkedin.value;
        const resume = form.resume.value;
        const application = {
            jobId: id,
            applicant: user.email,
            linkedIn,
            github,
            resume
        }
        axios.post('http://localhost:3000/apply', application)
            .then((res) => {
                console.log(res.data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Application submitted successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
                form.reset()

            })
            .catch((error) => console.log(error))

    }
    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={handleApply}>
                <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-6 shadow">
                    <legend className="fieldset-legend text-lg font-semibold">
                        Submit Your Information
                    </legend>

                    {/* LinkedIn */}
                    <label className="label">LinkedIn URL</label>
                    <input
                        type="url"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/username"
                        className="input input-bordered w-full"
                        required
                    />

                    {/* GitHub */}
                    <label className="label mt-3">GitHub URL</label>
                    <input
                        type="url"
                        name="github"
                        placeholder="https://github.com/username"
                        className="input input-bordered w-full"
                        required
                    />

                    {/* Resume */}
                    <label className="label mt-3">Resume URL</label>
                    <input
                        type="url"
                        name="resume"
                        placeholder="https://drive.google.com/..."
                        className="input input-bordered w-full"
                        required
                    />

                    <button className="btn btn-primary w-full mt-5">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    )
}
