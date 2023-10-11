import {useEffect,useState} from 'react'


//components  
import MedicineList from '../components/MedicineList'



const Home = () => {
    const [medicines,setMedicines] = useState(null)
    useEffect(()=>{
        const fetchMedicines = async() =>{
            const response = await fetch('/api/routers')
            const json = await response.json()

            if(response.ok){
                setMedicines(json)
            }
        }

        fetchMedicines()
    }, [])
    return (
        <div className="home">
          <div className="medicines">
            {medicines && medicines.map((medicine) => (
              <MedicineList key ={medicine._id} medicine = {medicine} / >
            ))}
          </div>
        </div>
      )
}

export default Home