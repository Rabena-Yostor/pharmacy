import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Rabena Yostor Pharmacy</h1>
        </Link>
        <Link to="/">
            <button className="btn btn-primary">Log Out</button>
          </Link>
      </div>
    </header>
  )
}

export default Navbar