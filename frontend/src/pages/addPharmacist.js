import { useEffect, useState} from "react";

import PharmacistForm from "../components/PharmacistForm";

const AddPharmacist = () => {
    const [pharmacist, setPharmacist] = useState(null)

    useEffect(() => {
        const fetchPharmacist = async () => {
            const response = await fetch('/api/workouts/createPharmacist')
            const json = await response.json()
            if(response.ok){
                setPharmacist(json)
            }
        }
        fetchPharmacist()
    },[])

    return (
        <div className="home">
            <PharmacistForm/>
        </div>
    )
}

export default AddPharmacist