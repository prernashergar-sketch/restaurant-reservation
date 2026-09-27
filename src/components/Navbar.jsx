import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>🍽️ Foodie Haven</h2>

      <div>
        <Link to="/">🏠 Home</Link>
        <Link to="/restaurants">🍴 Restaurants</Link>
        <Link to="/reserve">📅 Reserve Table</Link>
        <Link to="/reservations">📋 Reservations</Link>
      </div>
    </nav>
  );
}

export default Navbar;