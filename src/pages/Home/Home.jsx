import {  useEffect, useState } from "react";
import Banner from "./Banner";
import All_jobs from "./All_jobs";

export default function Home() {
    const [jobs,setJobs] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
            setLoading(false)
        })
        
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <div className="bg-neutral ">
                <Banner></Banner>
            </div>
          
                {
                   loading ? <p>Loading-------</p> : <All_jobs  jobs={jobs}></All_jobs> 
                }       
        </div>
    )
}
