import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <Link to="/" className="logo">
          CourseHub
        </Link>
        <div className="nav-links">
          <NavLink to="/category/Beginner">Beginner</NavLink>
          <NavLink to="/category/Intermediate">Intermediate</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
