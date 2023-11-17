import React from 'react';
import './Herramientas.css';

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
            logo: 'https://link.to/jira-logo.png',
            link: 'https://www.atlassian.com/software/jira',
        },
        {
            name: 'Figma',
            description: 'Herramienta de diseño colaborativo en línea.',
            logo: 'https://link.to/figma-logo.png',
            link: 'https://www.figma.com/',
        },
        {
            name: 'Kahoot',
            description: 'Plataforma gratuita que permite la creación de cuestionarios de evaluación. Crea concursos en el aula para aprender o reforzar el aprendizaje y donde los alumnos son los concursantes.',
            logo: 'https://link.to/figma-logo.png',
            link: 'https://kahoot.it/',
        },
    ];

    return (
        <div className='container-herra'>
            <div className='container-h-info'>
                <ul>
                    {tools.map((tool, index) => (
                        <li key={index}>
                            <h2>{tool.name}</h2>
                            <p>{tool.description}</p>
                            <img src={tool.logo} alt={`${tool.name} Logo`} style={{ maxWidth: '100px', height: '50px' }} />
                            <a href={tool.link} target="_blank" rel="noopener noreferrer">
                                Ir a {tool.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Herramientas;
