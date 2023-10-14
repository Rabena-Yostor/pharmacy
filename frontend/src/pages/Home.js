import { useEffect, useState } from "react"
const Home= ()=> {

    const [workouts, updatework]= useState(null)
    useEffect(()=> {
        const fetchWorkouts= async ()=>{
            const response= await fetch('http://localhost:4000/api/workouts')
 
            const json= await response.json()

            if (response.ok){
                updatework(json)

            }
        }

        fetchWorkouts()
    }, [])
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((work)=>(
                   <p key={work._id}> {work.Name}</p>

                ))}
            </div>

            
        </div>
    )
}
export default Home 