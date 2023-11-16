import { Link } from "react-router-dom";
import Temas from "./tema";
import './temas.css'
const Distribuicion = () => {

    return (
        <div className="distribuicion">
            <Link to="/matematica">
                <Temas  temas={"Matemática"} imagenes={'https://th.bing.com/th/id/OIP.tcTb-bdm2NP6iweew2VqawHaDp?pid=ImgDet&rs=1'}/>
            </Link>
            <Link to="/Tecnologia">  
                <Temas temas={"Tecnologia"}imagenes={'https://cdn.goconqr.com/uploads/media/image/14486436/desktop_db773dd3-0e85-43f0-92e9-5f1da43d39e7.jpg'}/>
            </Link>
            <Link to="/ciencia">
                <Temas temas={"Ciencia"} imagenes={'https://1.bp.blogspot.com/-8XgMkC75MgU/XpYbmwt4NDI/AAAAAAADBus/SmfmTOcT53gLMz0rE5xMiu3R9pz8WxplACLcBGAsYHQ/s1600/cientifica_Simona+Ceccarelli.jpg'} />
            </Link>
            <Link to="/idiomas">
                <Temas  temas={"Idiomas"} imagenes={'https://th.bing.com/th/id/OIP.wSlbVneooi-boI1Kmu6JtgHaEK?pid=ImgDet&w=1200&h=675&rs=1'}/>
            </Link>
            <Link to="/Historia">
                <Temas temas={"Historia"} imagenes={'https://metirtahome.files.wordpress.com/2019/02/historia-universal.jpg'}/>
            </Link>
            <Link>
                <Temas temas={"Recursos"} />
            </Link >
            <Link to="/Economia">
                <Temas temas={"Economia"} imagenes={'https://conceptodefinicion.de/wp-content/uploads/2019/08/C_Econom%C3%ADa.jpg'} />
            </Link>
            <Link to="/habilidadesblandas">
                <Temas temas={"Habilidades blandas"} imagenes={'https://th.bing.com/th/id/OIP.VibUNdd3G8jTD012G3CoDwHaE8?pid=ImgDet&rs=1'} />
            </Link>
            <Link to="/Creatividad">
                <Temas temas={"Creatividad"} imagenes={'https://static.vecteezy.com/system/resources/previews/002/539/385/large_2x/concept-drawing-for-creative-thinking-vector.jpg'} />
            </Link>    
    
         </div>

    )

}

export default Distribuicion;