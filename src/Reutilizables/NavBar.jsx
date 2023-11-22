import React from 'react';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav  style={{ backgroundColor:'rgb(62, 0, 98)', height:'5rem' }} className="navbar navbar-dark  fixed-top">
      <div className="container-fluid">
        <Link to="/">
        <a style={{ textDecoration:'none', fontWeight:'bolder' }}  className="navbar-brand" href="/">Kyōnabi</a>
        </Link>
        <div className="d-flex align-items-center">
        <Link to="/Login">
          <button type="button" style={{ backgroundColor:'#6a00a7' }} className="btn btn-dark me-3">
              Ingresa
          </button>
        </Link>
        <Link to="/Registro">
          <button type="button" style={{ backgroundColor:'#6a00a7' }} className="btn btn-dark me-3">
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
            <span style={{ backgroundColor:'rgb(62, 0, 98)' }} className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div style={{ backgroundColor:'#6a00a7' }}  className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menú
              </h5>
              <button 
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div style={{ backgroundColor:'rgb(62, 0, 98)' }} className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to={'/'}>
                    <a className="nav-link active" aria-current="page" href="">
                    Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/sugerencia'}>
                    <a className="nav-link active" aria-current="page" href="#">
                    Sugerencias
                    </a>
                  </Link>
                </li>
                <li  className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Estudiantes
                  </a>
                  <ul style={{ backgroundColor:'#6a00a7' }} className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link to="/contenidos">
                        <a className="dropdown-item" >
                          Temas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/herramientas">
                      <a className="dropdown-item">
                        Herramientas
                      </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Calendar">
                          <a className="dropdown-item" >
                            Seguimiento emocional
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
                  <ul style={{ backgroundColor:'#6a00a7' }} className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/recursos/creatividad">
                        Recursos
                      </a>
                    </li>
                    <li>
                      <Link to="/Formulariodocente">
                      <a className="dropdown-item" href="#">
                        ¡Quiero ser voluntario!
                      </a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                  </ul>
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