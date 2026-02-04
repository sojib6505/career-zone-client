import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function AddJobs() {
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries());
        const { min, max, currency, ...nestData } = data
        const responsibilitie = data.responsibilities.split(',').map(item => item.trim())
        const requirement = data.requirements.split(',').map(item => item.trim())
        nestData.salaryRange = {
            min, max, currency
        }
        nestData.responsibilities = responsibilitie
        nestData.requirements = requirement
        console.log(nestData)
        try {
            axios.post('http://localhost:3000/jobs', nestData)
                .then((res) => {
                    console.log(res.data)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Application submitted successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                    form.reset()
                }
                )
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Job Post</h2>

            <div className="space-y-4">
                {/* Job Title */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="e.g., Marketing Specialist"
                        className="input input-bordered w-full"
                    />
                </div>
                {/* Company Name */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Company Name</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="e.g., Company Name"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Location */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="e.g., Banani, Dhaka"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Job Type */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Job Type</label>
                    <select
                        name="jobType"
                        className="select select-bordered w-full">
                        <option>Remote</option>
                        <option>Onsite</option>
                        <option>Hybrid</option>
                    </select>
                </div>

                {/* Category */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Category</label>
                    <input
                        name="category"
                        type="text"
                        placeholder="e.g., Marketing"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Salary Range */}
                <div className="form-control w-full ">
                    <label className="label font-semibold">Salary Range</label>
                    <div className="flex gap-5">
                        <input
                            name="min"
                            type="text"
                            placeholder=" min"
                            className="input input-bordered w-full"
                        />
                        <input
                            name="max"
                            type="text"
                            placeholder="max"
                            className="input input-bordered w-full"
                        />
                        {/* currency */}
                        <div className="form-control w-full">
                            {/* <label className="label font-semibold">Job Type</label> */}
                            <select
                                name="currency"
                                className="select select-bordered w-full">
                                <option>BDT</option>
                                <option>$</option>
                                <option>Rupi</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Application Deadline */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Application Deadline</label>
                    <input type="date" className="input input-bordered w-full" />
                </div>

                {/* Job Description */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Job Description</label>
                    <textarea
                        name="description"
                        placeholder="Describe the role..."
                        className="textarea textarea-bordered w-full"
                        rows="4"
                    />
                </div>

                {/* Requirements */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Requirements</label>
                    <textarea name="requirements"
                        placeholder="List requirements separated by commas..."
                        className="textarea textarea-bordered w-full"
                        rows="3"
                    />
                </div>

                {/* Responsibilities */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Responsibilities</label>
                    <textarea name="responsibilities"
                        placeholder="List responsibilities separated by commas..."
                        className="textarea textarea-bordered w-full"
                        rows="3"
                    />
                </div>

                {/* HR Contact Info */}
                <div className="form-control w-full">
                    <label className="label font-semibold">HR Name</label>
                    <input
                        name="hr_name"
                        type="text"
                        placeholder="e.g., Sojib Islam"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label font-semibold">HR Email</label>
                    <input
                        name="hr_email"
                        type="email"
                        placeholder="e.g., sojibislam6505@gmail.com"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Company Logo */}
                <div className="form-control w-full">
                    <label className="label font-semibold">Company Logo</label>
                    <input name="company_logo" type="url" className="file-input file-input-bordered w-full px-2" placeholder="logo URL" />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full mt-4">Create Job Post</button>
            </div>
        </form>
    );
}
