import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div id="columnas">
              <ul>
                <li>Noticias</li>
                <li>Nuestro Equipo</li>
                <li>Nuestros Tutores</li>
                <li>Contacto</li>
                <li>Colaboradores</li>
                <li>Enlaces</li>
              </ul>
              <img src="https://media.discordapp.net/attachments/1143374824299827302/1171586365595603084/REDES.png?ex=655d37d4&is=654ac2d4&hm=ef349a4800636c1a7d15e9185b4191fc1ab837dea7e925f82aac3c480835678d&=" alt="Redes sociales" className="img-redes" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
