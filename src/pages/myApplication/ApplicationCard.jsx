import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function ApplicationCard({ jobApplications }) {
    
    console.log(jobApplications)
    const application = jobApplications.jobInfo
    return (
        <>

            <li className="list-row">
                <div><img className="size-10 rounded-box" src={application.company_logo} /></div>
                <div>
                    <div>{application.company
                    }</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{application.title
                    }</div>
                </div>
                <p className="list-col-wrap text-xs">
                    {application.description}
                </p>
                <Link to={`/job_detail/${jobApplications.jobId}`}><button className="btn btn-primary hover:btn-secondary">
                    Detail
                </button>
</Link>
            </li>
        </>
    )
}
