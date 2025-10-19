import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Logo</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#login">Log In</a></li>
        <li><a href="#logout">Log Out</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;