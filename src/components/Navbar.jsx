const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5 mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TODO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
