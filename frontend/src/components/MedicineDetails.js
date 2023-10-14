import { useMedicinesContext } from "../hooks/useMedicinesContext"
const MedicineDetails = ({ medicine }) => {
  const {dispatch} = useMedicinesContext()
  const handleClick = async () => {
    const response = await fetch('/medicine/' + medicine._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_MEDICINE', payload: json})
    }
  }

  return (
    <div className="workout-details">
      <h4>{medicine.name}</h4>
      <p><strong>Details:  </strong>{medicine.details}</p>
      <p><strong>Price:  </strong>{medicine.price}</p>
      <p><strong>Avialable Quantity:  </strong>{medicine.available_quantity}</p>
      <p>{medicine.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default MedicineDetails