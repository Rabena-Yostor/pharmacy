import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Pharmacy</h1>
      <Link to="/peter">
        <button>Add and Edit Medicines</button>
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
    </div>
  );
}

export default HomePage;
