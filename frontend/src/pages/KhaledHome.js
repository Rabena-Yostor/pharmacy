import { useEffect, useState } from "react";

const KhaledHome = () => {
    const [requests, setRequests] = useState(null);
    useEffect(() => {
        const fetchRequests = async () => {
            const response = await fetch('http://localhost:4000/api/medicine/viewPharmacistsRequests');
            const json = await response.json();
            if (response.ok) {
                setRequests(json);
            }
        }
        fetchRequests();
    }, []);
    return (
        <div className="home">
            <div className="requests">
                {requests && requests.map((request) => (
                    <p key={request._id}>Name: {request.Name}, Email: {request.Email}, Education: {request.Education} </p>
                ))}
            </div>
        </div>
    );
}
export default KhaledHome;