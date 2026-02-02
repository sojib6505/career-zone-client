import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import axiosPublic from '../../api/axiosPublic'
import ApplicationCard from './ApplicationCard'

export default function ApplicationList() {
    const { user, firebaseLoading } = useAuth()
    const [applications, setApplication] = useState([])
    useEffect(() => {
        // Do not fetch until we have a valid email and firebase has finished loading
        if (!user?.email || firebaseLoading) return
        const controller = new AbortController()
        const fetchApplications = async () => {
            try {
                const res = await axiosPublic.get(`/applications/with-job?email=${user.email}`, { signal: controller.signal })
                setApplication(res.data)
            } catch (err) {
                // Ignore cancellations, log other errors
                if (err?.code === 'ERR_CANCELED' || err?.name === 'CanceledError') return
                console.log(err)
            }
        }
        fetchApplications()
        // Cleanup: abort fetch when component unmounts or deps change
        return () => controller.abort()
    }, [user?.email],firebaseLoading)
    console.log(applications)
    return (
        <ul className="list bg-base-100 space-y-5 rounded-box shadow-md lg:w-5xl mx-auto mt-10">
            {
                firebaseLoading
                    ? <p>Auth loading...</p>
                    : applications.map(application => <ApplicationCard key={application._id} jobApplications={application}></ApplicationCard> )
            }
        </ul>
    )
}
