import { useEffect, useState } from "react"
import { useMedicinesContext } from "../hooks/useMedicinesContext"
// components
import MedicineDetails from '../components/MedicineDetails'
import MedicineForm from "../components/MedicineForm"
import MedicineEditForm from "../components/MedicineEditForm"


const Home = () => {
  const {medicines , dispatch} = useMedicinesContext()
  const [editMedicine, setEditMedicine] = useState(null);
  const handleEdit = (medicine) => {
    setEditMedicine(medicine);
  };

  const handleCancelEdit = () => {
    setEditMedicine(null);
  };

  const handleSaveEdit = (updatedMedicine) => {
    dispatch({ type: 'UPDATE_MEDICINE', payload: updatedMedicine });
    setEditMedicine(null);
  };
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
          <MedicineDetails
            medicine={medicine}
            key={medicine._id}
            onEdit={handleEdit}
          />
        ))}
      </div>
      {editMedicine && (
        <MedicineEditForm
          medicine={editMedicine}
          onCancel={handleCancelEdit}
          onSave={handleSaveEdit}
        />
      )}
      <MedicineForm />
    </div>
  )
}

export default Home