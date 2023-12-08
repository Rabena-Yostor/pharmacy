import React from "react";
import { Link } from "react-router-dom";

function HomePageAdmin() {
  const userType = localStorage.getItem('userType');
  const username = localStorage.getItem('username');
  // Change userType to the correct user type
  var type = "";
  if(userType === "admin") {
    type = "Admin";
  } else if(userType === "pharmacist") { 
    type = "Pharmacist";
  } else  {
    type = "";
  }
  return (
    <div>
      <h1>Welcome to the Pharmacy YA ADMIN</h1>
      <h2>{type} {username}</h2>
      <br />
      <hr />
      <Link to="/peter">
        <button>Add and Edit Medicines</button>
      </Link>
      <Link to="/shop">
        <button>Shop</button>
      </Link>
      <Link to="/hamouda">
        <button>Filter Medicines</button>
      </Link>
      <Link to="/hana">
        <button>View All Medicines</button>
      </Link>
      <Link to="/hazem2">
        <button>Add Admin</button>
      </Link>
      <Link to="/hazem1">
        <button>Add Pharmacist</button>
      </Link>
      <Link to="/hazem3">
        <button>Register Patient</button>
      </Link>
      <Link to="/malak">
        <button>View Patient's Basic Info</button>
      </Link>
      <Link to="/khaled">
        <button>search and view (khaled)</button>
      </Link>
      <br />
      <hr />
      <Link to="/change-password">
        <button>Change Password</button>
      </Link>
    </div>
  );
}

export default HomePageAdmin;
