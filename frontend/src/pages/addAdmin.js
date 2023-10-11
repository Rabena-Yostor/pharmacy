import{useEffect,useState} from 'react'
//import { json } from 'react-router-dom'
//components
//import WorkoutDetails from '../components/WorkoutDetails'

import AdminForm from '../components/AdminForm'

const AddAdmin = () => {
    const [admin, setAdmin] = useState(null)

useEffect(() => {
    const fetchAdmin = async () => {
        const response = await fetch('/api/workouts/admin')
        const json = await response.json()
        if(response.ok){
            setAdmin(json)
        }
    }


    fetchAdmin()
},[])
    //return a form to create a new admin
    return (
        <div className="home">

           <AdminForm/>
        
            </div>
    )
}
export default AddAdmin