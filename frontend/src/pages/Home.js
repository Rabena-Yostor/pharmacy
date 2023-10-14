import { useEffect } from "react"
import { useMedicinesContext } from "../hooks/useMedicinesContext"
// components
import MedicineDetails from '../components/MedicineDetails'
import MedicineForm from "../components/MedicineForm"


const Home = () => {
  const {medicines , dispatch} = useMedicinesContext()
  useEffect(() => {
    const fetchMedicines = async () => {
      const response = await fetch('/medicine')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_MEDICINES', payload: json})
      }
    }

    fetchMedicines()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {medicines && medicines.map(medicine => (
          <MedicineDetails medicine={medicine} key={medicine._id} /> ))}
      </div>
      <MedicineForm/>
    </div>
  )
}

export default Home