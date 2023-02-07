import { Link } from "react-router-dom";

export function TopNav() {
  return (
    <nav className="topNav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/dogs">My Dogs</Link>
        </li>
      </ul>
    </nav>
  );
}
