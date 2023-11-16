import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/">
        <a className="navbar-brand" href="#">Kyonabi</a>
        </Link>
        <div className="d-flex align-items-center">
          <Link to="/Ingreso">
            <button type="button" className="btn btn-link px-3 me-2">
              Ingresa
            </button>
          </Link>
          <Link to="/Registro">
            <button type="button" className="btn btn-primary me-3">
              Registrate
            </button>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to={'/'}>
                    <a className="nav-link active" aria-current="page" href="#">
                    Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Foro
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Estudiantes
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link to="/contenidos">
                        <a className="dropdown-item" href="#">
                          TEMAS
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Herramientas
                      </a>
                    </li>
                    <li>
                      <Link to="/Calendar">
                          <a className="dropdown-item" href="#">
                            seguimiento emocional
                          </a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Docentes
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Recursos
                      </a>
                    </li>
                    <li>
                    <Link to="/sugerencia">
                      <a className="dropdown-item" href="#">
                        Quiero ser voluntario
                      </a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/sugerencia">
                      <a className="dropdown-item" href="#">
                       <h6> Sugerencias</h6>
                      </a>
                  </Link>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
