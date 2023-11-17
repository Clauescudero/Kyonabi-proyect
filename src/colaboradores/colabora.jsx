import { Link } from 'react-router-dom';
import './colabora.css'

const Colaboradores = ()=>{

    return(
        <div className="Colaboradores">
            <h1 id='parrafo-colaboradores'> Nuestros  Colaboradores </h1>
            <div className="container">
                <section>
                <div id="img-colabo-1">
                    <Link href="https://chile.generation.org/#picker">
                        <img src="src\assets\generatio-chile.jpg " alt="" />
                    </Link>
                </div>
                
                    <p>
                        Generation Chile trabaja con jóvenes entre 18 a 29 años, que están que están pasando por una situación laboral complicada a través de la preparación gratuita de carreras duraderas y el posterior apoyo para poder emplearse.
                        <br/>
                        <br/>
                        <br/>
                        El enfoque y experiencia de Generation contribuye a resolver los principales desafíos que enfrentan hoy los empleadores: escasez de talento calificado, bajos niveles de desempeño en el trabajo, necesidades de entrenamiento y alta rotación. Conectamos los requerimientos de los empleadores con graduados motivados por su primera experiencia laboral.
                    </p>
                
                    </section>
                    <section>
            <div className="colabo-2">

                <div id='img-colabo-2'>
                    <Link to="https://portales.bancochile.cl/cuentasconelchile/educacion-financiera-digital">
                    <img src="src\assets\banco-de-chile.webp " alt="" />
                    </Link>
                </div>
            </div>
            </section>
            </div>
        </div>

    )

}

export default Colaboradores;