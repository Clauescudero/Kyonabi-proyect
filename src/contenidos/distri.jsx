import Temas from "./tema";
import './temas.css'
const Distribuicion = ( )=>{
     


    return(
        <div className="distribuicion">
     <Temas  temas={"Matemática"} imagenes={'src/assets/kyumatematica.png'}/>
      <Temas temas={"TecnologÍa"}imagenes={'src/assets/Kyutecnologia.png'} />

     <Temas  temas={"Idiomas"} imagenes={'src/assets/kyuidiomas.png'}/>

      <Temas temas={"Historia"} imagenes={'src/assets/kyuhistoria.png'}/>
      <Temas temas={"Recursos"} imagenes={'src/assets/kyurecursos.png'}/>
      <Temas temas={"Economía"} imagenes={'src/assets/kyueconomia.png'} />
      
      <Temas temas={"Habilidades"} imagenes={'src/assets/kyuhabilidades.png'} />

      <Temas temas={"Creatividad"} imagenes={'src/assets/kyucreatividad.png'} />
     
    
      </div>


    )

}

export default Distribuicion;