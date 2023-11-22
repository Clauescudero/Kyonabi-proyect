import Temas from "./tema";
import './temas.css'
import { Link } from "react-router-dom";
const Distribuicion = () => {



  return (
    <div className="distribuicion">
      <Link to="/Matematicas">
        <Temas temas={"Matemática"} imagenes={'src/assets/kyumatematica.png'} />
      </Link>
      <Link to="/Tecnologia">
        <Temas temas={"Tecnología"} imagenes={'src/assets/Kyutecnologia.png'} />
      </Link>
      <Link to="/Idiomas">
        <Temas temas={"Idiomas"} imagenes={'src/assets/kyuidiomas.png'} />
      </Link>
      <Link to="/Historia">
        <Temas temas={"Historia"} imagenes={'src/assets/kyuhistoria.png'} />
      </Link>
      <Temas temas={"Recursos"} imagenes={'src/assets/kyurecursos.png'} />
      <Link to="/Economia">
        <Temas temas={"Economía"} imagenes={'src/assets/kyueconomia.png'} />
      </Link>
      <Link to="/Skills">
        <Temas temas={"Habilidades"} imagenes={'src/assets/kyuhabilidades.png'} />
      </Link>
      <Link to="/Creatividad">
        <Temas temas={"Creatividad"} imagenes={'src/assets/kyucreatividad.png'} />
      </Link>

    </div>


  )

}

export default Distribuicion;


