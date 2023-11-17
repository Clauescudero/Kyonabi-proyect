import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="miFooter" className="footer-miApp">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div id="columnas" className="columnas-miApp">
              <ul style={{fontWeight: 'bold', fontSize:'large'}}>
                <li><Link to="/noticias">Noticias</Link></li>
                <li><Link to="/equipo">Nuestro Equipo</Link></li>
                <li><Link to="/Tutores">Nuestros Tutores</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/Colaboradores">Colaboradores</Link></li>
                <li><Link to="/enlaces">Enlaces</Link></li>
              </ul>
              <img
                src="https://media.discordapp.net/attachments/1143374824299827302/1171586365595603084/REDES.png?ex=655d37d4&is=654ac2d4&hm=ef349a4800636c1a7d15e9185b4191fc1ab837dea7e925f82aac3c480835678d&="
                alt="Redes sociales"
                className="img-redes"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
