import React from 'react';
// import './Herramientas.css';
import TarjetaHerramienta from './TarjetaHerramienta';

const Herramientas = () => {
    const tools = [
        {
            name: 'Notion',
            description: 'Herramienta de colaboración para tomar notas, gestionar proyectos y más.',
            logo: 'https://logos-download.com/wp-content/uploads/2019/06/Notion_App_Logo.png',
            link: 'https://www.notion.so/',
        },
        {
            name: 'Jira',
            description: 'Software de seguimiento de problemas y gestión de proyectos ágil.',
            logo: 'https://res.cloudinary.com/status-hero/image/upload/f_auto,q_auto,w_512/v2709/assets/entities/logos/icon/jira.png',
            link: 'https://www.atlassian.com/software/jira',
        },
        {
            name: 'Figma',
            description: 'Herramienta de diseño colaborativo en línea.',
            logo: 'https://images.xiaozhuanlan.com/photo/2020/96d4db790e8c25433e5b0003d9c81c35.png',
            link: 'https://www.figma.com/',
        },
        {
            name: 'Kahoot',
            description: 'Plataforma gratuita que permite la creación de cuestionarios de evaluación. Crea concursos en el aula para  reforzar el aprendizaje.',
            logo: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/04a23c30-ec95-4ab3-9cbe-718b2b9cbfe1.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=2618',
            link: 'https://kahoot.it/',
        },
        {
            name: 'Miro',
            description: 'Un entorno donde los equipos pueden gestionar proyectos, diseñar productos y definir el futuro en colaboración.',
            logo: 'https://learning.vicinnovate.ac.nz/uploads/1/0/0/0/10008598/published/miro-logo-rounded.png?1644873566',
            link: 'https://miro.com/es',
        },
        {
            name: 'Miro',
            description: 'Un entorno donde los equipos pueden gestionar proyectos, diseñar productos y definir el futuro en colaboración.',
            logo: 'https://learning.vicinnovate.ac.nz/uploads/1/0/0/0/10008598/published/miro-logo-rounded.png?1644873566',
            link: 'https://miro.com/es',
        },
    ];

    return (
        <div className='container-herra'>
            <h1>¡Herramientas útiles que debes conocer!</h1>
            <div className='container-info'>
                <ul>
                    <div className='Card-herramienta'>
                    {tools.map((tool, index) => (
                        <TarjetaHerramienta
                            key={index}
                            name={tool.name}
                            description={tool.description}
                            logo={tool.logo}
                            link={tool.link}
                        />
                    ))}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Herramientas;
