
import { useLoaderData, useParams } from "react-router"

export default function JobDetail() {
    const data = useLoaderData()
    const {id} = useParams()
    console.log(data)
  return (
    <div>
       {id}
    </div>
  )
}
