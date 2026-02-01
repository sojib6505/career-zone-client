import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import axiosPublic from '../../api/axiosPublic'

export default function ApplicationList() {
    const {user,firebaseLoading} = useAuth()
    const [applications, setApplication] = useState([])
    useEffect(()=>{
        // Do not fetch until we have a valid email and firebase has finished loading
        if (!user?.email || firebaseLoading) return

        const controller = new AbortController()
        const fetchApplications = async () => {
            try {
                const res = await axiosPublic.get(`/application?email=${user.email}`, { signal: controller.signal })
                setApplication(res.data)
            } catch (err) {
                // Ignore cancellations, log other errors
                if (err?.code === 'ERR_CANCELED' || err?.name === 'CanceledError') return
                console.error(err)
            }
        }
        fetchApplications()
        // Cleanup: abort fetch when component unmounts or deps change
        return () => controller.abort()
    },[user?.email, firebaseLoading])
  return (
    <div>
       {firebaseLoading?<p>loading--------</p>:
        <h1>{applications.length}</h1>}
    </div>
  )
}
