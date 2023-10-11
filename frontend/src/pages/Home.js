import {useEffect,useState} from 'react'


//components  




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
            {medicines && medicines.map(medicine => (
              <p key ={medicine._id}>{medicine.name}</p>
            ))}
          </div>
        </div>
      )
}

export default Home