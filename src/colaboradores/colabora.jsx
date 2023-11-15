import { Link } from 'react-router-dom';
import './colabora.css'

const Colaboradores = ()=>{

    return(
        <div className="Colaboradores">
            <h1 id='parrafo-colaboradores'> Nuestros  Colaboradores </h1>
            <div className="row">
                <div className="col-6">
                    <Link to="https://chile.generation.org/#picker">
                        <img src="src\assets\generatio-chile.jpg " alt="" />
                    </Link>
                </div>
                <div className="col-6">
                     <p>
                        Generation Chile trabaja con jóvenes entre 18 a 29 años, que están que están pasando por una situación laboral complicada a través de la preparación gratuita de carreras duraderas y el posterior apoyo para poder emplearse.
                        <br/>
                        <br/>
                        <br/>
                        El enfoque y experiencia de Generation contribuye a resolver los principales desafíos que enfrentan hoy los empleadores: escasez de talento calificado, bajos niveles de desempeño en el trabajo, necesidades de entrenamiento y alta rotación. Conectamos los requerimientos de los empleadores con graduados motivados por su primera experiencia laboral.
                     </p>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <img src="src\assets\banco-de-chile.webp " alt="" />
                </div>
            </div>

        </div>

    )

}

export default Colaboradores;