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
   //CREATE a homepage that choose to go to any page
}
export default AddAdmin