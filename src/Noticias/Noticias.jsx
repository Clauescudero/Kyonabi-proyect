import React from 'react';
/* import './Noticias.css'; */
import TarjetaNoticias from './TarjetaNoticias.jsx'; // Agrega la extensión del archivo si es .js

const Noticias = () => {
    const tools = [
        {
            name: 'Mineduc',
            description: 'Informate sobre los procesos de educación en Chile.',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mineduc.svg/1200px-Mineduc.svg.png',
            link: 'https://www.mineduc.cl/',
        },
        {
            name: 'Admisión Escolar',
            description: 'Admisión Escolar 2024, periódo complementario.',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mineduc.svg/1200px-Mineduc.svg.png',
            link: 'https://www.sistemadeadmisionescolar.cl/',
        },
        {
            name: 'Beneficios Estudiantiles',
            description: 'Beneficios estudiantiales Educación Superior.',
            logo: 'https://portal.beneficiosestudiantiles.cl/sites/default/files/logo_superior.jpg',
            link: 'https://portal.beneficiosestudiantiles.cl/',
        },
        {
            name: 'Becas Santander',
            description: 'Si eres de los que piensan que nunca hay que dejar de formarse, regístrate y accede a cientos de audiolibros, ebooks, podcasts, videos y cursos.',
            logo: 'https://www.utem.cl/wp-content/uploads/2019/03/becas-santander-portada.jpg',
            link: 'https://www.becas-santander.com/',
        },
        {
            name: 'UDEMY',
            description: 'Una amplia selección de cursos. Elige entre más de 210.000 cursos de vídeo en línea con nuevo contenido cada mes.',
            logo: 'https://s.udemycdn.com/meta/default-meta-image-v2.png',
            link: 'https://www.udemy.com/',
        },
        {
            name: 'IKIGAI Test',
            description: 'Ikigai es un concepto japonés que combina 2 palabras: “iki” que significa vida y “gai” que significa “propósito” es similar al concepto francés “Raison d’être” o razón de ser y básicamente se refiere a tener un motivo para levantarte por la mañana y eso se logra al encontrar y vivir tu verdadero propósito',
            logo: 'https://ikigaitest.com/wp-content/uploads/2022/06/IKIGAI-logo.svg',
            link: 'https://ikigaitest.com/es/test-de-personalidad/',
        },
    ];

    return (
        <div className='container-Noticia'>
            <h1>¡Noticias y Enlaces de interés!</h1>
            <div className='container-info-Noticias'>
                <div className='Card-Noticias'>
                    {tools.map((tool, index) => (
                        <TarjetaNoticias
                            key={index}
                            name={tool.name}
                            description={tool.description}
                            logo={tool.logo}
                            link={tool.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Noticias;
