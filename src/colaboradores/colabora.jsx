import { Link } from 'react-router-dom';
import './colabora.css'

const Colaboradores = ()=>{

    return(
        <div className="Colaboradores">
            <h1 id='parrafo-colaboradores'> Nuestros  Colaboradores </h1>
            <div className="container">
                <section>
                <div id="img-colabo-1">
                    <Link to="https://chile.generation.org/">
                        <img src="src/assets/Generation.png" alt="" />
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
                    <img src="src/assets/Bancochile.png" alt="" />
                    </Link>
                </div>
                <p>
                El Banco de Chile se funda el 28 de octubre de 1893 con un capital inicial de $20.000.000 y tras la fusión de los entonces Banco Nacional de Chile, Banco Agrícola y Banco de Valparaíso.

Formalmente inicia sus operaciones dos meses después el -2 de enero de 1894- con dos oficinas principales (Santiago y Valparaíso) y una red de 23 sucursales a lo largo del país y 10 agencias en el extranjero para sus operaciones internacionales. 
                        
                    </p>
                
            </div>
            </section>
            </div>
        </div>

    )

}

export default Colaboradores;