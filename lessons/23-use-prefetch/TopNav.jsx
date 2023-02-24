import { Link, useLocation } from "react-router-dom";
import { api } from "../store/apiSlice";

export function TopNav() {
  const location = useLocation();
  const prefetchServices = api.usePrefetch("getServices");
  const prefetchDogs = api.usePrefetch("getDogs");
  return (
    <nav className="topNav">
      <ul>
        <li className={location.pathname === "/" ? "selected" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li
          onMouseEnter={() => prefetchServices()}
          className={location.pathname === "/services" ? "selected" : ""}
        >
          <Link to="/services">Services</Link>
        </li>
        <li
          onMouseEnter={() => prefetchDogs()}
          className={location.pathname === "/dogs" ? "selected" : ""}
        >
          <Link to="/dogs">My Dogs</Link>
        </li>
        <li className={location.pathname === "/contact" ? "selected" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
