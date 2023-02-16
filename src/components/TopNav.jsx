import { Link, useLocation } from "react-router-dom";

export function TopNav() {
  const location = useLocation();
  return (
    <nav className="topNav">
      <ul>
        <li className={location.pathname === "/" ? "selected" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/services" ? "selected" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li className={location.pathname === "/dogs" ? "selected" : ""}>
          <Link to="/dogs">My Dogs</Link>
        </li>
        <li className={location.pathname === "/contact" ? "selected" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
