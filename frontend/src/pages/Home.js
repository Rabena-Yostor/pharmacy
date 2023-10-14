import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Pharmacy</h1>
      <div className="medicines">
        <Link to="/view-medicines">
          <button>View All Medicines</button>
        </Link>
        <Link to="/filter-medicines">
          <button>Filter Medicines</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
