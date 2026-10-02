import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import project from "../services/project"


export default function ProjectDetail(){

    const [projectDetails, setProjectDetails] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const {slug} = useParams()

    

    useEffect(()=> {

        const getProjectDetails = async () => {
            
            setLoading(true)
            const response = await project.getProject(slug)

            if(response.error){

                setError(response.error)
            }
            else{

                setProjectDetails(response)
            }
            setLoading(false)
        }
        
    }, [])
    return(

        <div>
            <h1>project name: {projectDetails.name}</h1>
            <p>project description: {projectDetails.description}</p>
            <p>created_at : {projectDetails.created_at}</p>
        </div>
    )
}