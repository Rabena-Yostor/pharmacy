const WorkoutDetails = ({addAdmin}) => { 
    return (
        <div className="workout-details">
            <h2>{addAdmin.AdminUserName}</h2>
            <p>{addAdmin.AdminPassword}</p>
        </div>
    
    )
}
export default WorkoutDetails