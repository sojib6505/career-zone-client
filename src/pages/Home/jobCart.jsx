import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";
export default function JobCart({ jobData }) {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, requirements, company_logo } = jobData
    console.log(jobData)

    return (
        <div className="card p-5 flex flex-col  space-y-2 bg-neutral">
            <div className="flex gap-5 items-center">
                <div>
                    <img className="w-15" src={company_logo} alt="" />
                </div>
                <div>
                    <p className="font-bold">{category}</p>
                    <div className="flex items-center gap-1">
                        <CiLocationOn></CiLocationOn>
                        <p className="text-sm">{location}</p>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="font-bold">{title}</h2>
                <p className="text-sm">{jobType}</p>
                <p className="text-sm">{description}</p>
            </div>
            <div className=" mt-auto flex justify-end ">
                <Link to={`/job_detail/${_id}`} className="btn btn-base-100 hover:btn-primary">View detail</Link>
            </div>
        </div>
    )
}
