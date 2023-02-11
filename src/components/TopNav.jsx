import { Link, useLocation } from "react-router-dom";

export function TopNav() {
  const location = useLocation();
  return (
    <nav className="topNav">
      <ul>
        <li>
          <Link className={location.pathname === "/" ? "selected" : ""} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/services" ? "selected" : ""}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/dogs" ? "selected" : ""}
            to="/dogs"
          >
            My Dogs
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/contact" ? "selected" : ""}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
