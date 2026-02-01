
import { FaBriefcase, FaClock, FaEnvelope, FaMapMarkerAlt, FaMoneyBillWave, FaUserTie } from "react-icons/fa"
import { Link, useLoaderData, useParams } from "react-router"

export default function JobDetail() {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo } = useLoaderData()
    const { id } = useParams()
    // console.log(data)
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="card bg-base-100 shadow-xl border">
                <div className="card-body gap-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <img
                            src={company_logo}
                            alt={company}
                            className="w-20 h-20 object-contain border rounded-lg p-2"
                        />

                        <div className="flex-1">
                            <h2 className="card-title text-2xl font-bold">{title}</h2>
                            <p className="text-sm text-gray-500">{company}</p>

                            <div className="flex flex-wrap gap-4 mt-2 text-sm">
                                <span className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-primary" />
                                    {location}
                                </span>

                                <span className="flex items-center gap-1">
                                    <FaBriefcase className="text-primary" />
                                    {jobType}
                                </span>

                                <span className="badge badge-outline badge-success capitalize">
                                    {status}
                                </span>

                                <span className="badge badge-outline">{category}</span>
                            </div>
                        </div>
                    </div>
                    {/* Salary & Deadline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <FaMoneyBillWave className="text-xl text-primary" />
                            <span className="font-medium">
                                Salary: {salaryRange?.currency?.toUpperCase()}{" "}
                                {salaryRange?.min.toLocaleString()} –{" "}
                                {salaryRange?.max.toLocaleString()} / month
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaClock className="text-xl text-primary" />
                            <span className="font-medium">
                                Deadline:{" "}
                                {new Date(applicationDeadline).toLocaleDateString()}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                        <p className="text-gray-600 leading-relaxed">{description}</p>
                    </div>

                    {/* Requirements */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {requirements?.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Responsibilities */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {responsibilities?.map((res, index) => (
                                <li key={index}>{res}</li>
                            ))}
                        </ul>
                    </div>

                    {/* HR Info */}
                    <div className="bg-base-200 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">HR Contact</h3>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                            <span className="flex items-center gap-2">
                                <FaUserTie className="text-primary" />
                                {hr_name}
                            </span>

                            <span className="flex items-center gap-2">
                                <FaEnvelope className="text-primary" />
                                {hr_email}
                            </span>
                        </div>
                    </div>

             
                    <div className="card-actions justify-end">
                        <Link to={`/apply/${_id}`} className="btn btn-primary">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
