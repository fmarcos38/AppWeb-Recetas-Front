import React, {useState, useEffect} from "react";
import "./estilos.css";
import NavBar from '../NavBar';
import ListaRecetasMuestra from "./ListaRecetasDeMuestra";
import ListaAlimentos from "./ListaAlimentos";
import imgRecetas from "../../imagenes/fondo.webp";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from "../Footer";
import userLog from '../../localStorage';

import vegan from "../../imagenes/símbolo-vegetariano.jpg";
import gluten from "../../imagenes/glutenFree.jpg";
import keto from "../../imagenes/keto.jpg";
import paleo from "../../imagenes/paleo.avif";
import proteica from "../../imagenes/proteica.jpg";
import { useDispatch } from "react-redux";
import { getRecetas } from "../../redux/actions";

function LandingPage() {

    //--url whatsapp-------------------------------
    let whatsapp = `https://wa.me/2281460124`;
    const userStorage = userLog.getUserActual(); //console.log("userLog:", userStorage);
    //estados q le paso a la navbar
    const [userActual, setUserActual] = useState(false);
    const [name, setName] = useState("visitante");
    const dispatch = useDispatch();
    //para actualizar nombre y userActual
    useEffect(()=>{
        if(!userStorage){
            return;
        }else{
            setName(userStorage.user.name);
            setUserActual(true);
            dispatch(getRecetas());
        }
    },[name, userStorage,userActual]);


    return (
        <div class="container-fluid">
            <NavBar userActual={userActual} name={name}/>
            
            <div class="container-fluid">   
                <div className="row contRedesYPrimero">
                    <div class="container col-1 contRedes">
                        <div className="divLinks">
                            <a href="https://www.instagram.com/fmarcos_casla/">
                                <InstagramIcon className="insta"/>
                            </a>
                            <a href={whatsapp}>
                                <WhatsAppIcon className="whats"/>
                            </a>                  
                        </div>                                  
                    </div>
                    {/* cont 1 */}
                    <div class="container col contTitImage">                        
                            <div class="container titulos">
                                <h2 className="titulo">No sabés que cocinar?</h2>                              
                            </div>
                            <div class="container titulos">
                                <img src={imgRecetas} className="imgPrinc" alt="" />
                            </div>
                            <div class="container titulos">
                                <h3 className="titulo">Te damos las mejores ideas para cada tipo de dieta...</h3>
                            </div>
                    </div>
                </div>
                
                {/* Dietas */}
                <div class="container contTiposrecetas">
                    <h4 className="titulo">Algunas de las Dietas a las que se adaptan nuestras recetas</h4>

                    <div class="container-fluid contSegundo">                                     
                        <div class="container contLogoD">                            
                            <img src={gluten} alt="" className="imgDietas"/>
                        </div>
                        <div class="container contLogoD">
                            <img src={vegan} alt="" className="imgDietas"/>
                        </div>
                        <div class="container contLogoD">
                            <img src={proteica} alt="" className="imgDietas"/>
                        </div>
                        <div class="container contLogoD">
                            <img src={keto} alt="" className="imgDietas"/>
                        </div>
                        <div class="container contLogoD">                            
                            <img src={paleo} alt="" className="imgDietas"/>
                        </div>
                </div>
                </div>
                
                {/* Dietas pantalla chica */}
                <div class="row contSegundoPChica">                        
                    <img src={gluten} alt="" className="imgDietas"/>
                    <img src={vegan} alt="" className="imgDietas"/>
                    <img src={proteica} alt="" className="imgDietas"/>
                    <img src={keto} alt="" className="imgDietas"/>
                    <img src={paleo} alt="" className="imgDietas"/>                        
                </div>                
                

                {/* cont recetas */}                
                <div class="container contTercero">
                    <h4 className="titulo">Algunas de nuestras recetas</h4>
                    {/* pantalla CH recetas */}
                    <div class="row">                        
                        <ListaRecetasMuestra />                        
                    </div>
                </div>
                
                
                {/* Info alimentos */}
                <div class="container-fluid contSegundoDIV">
                    <div class="container conttitulosMed">
                        <div class="titulo">
                            <h3>Salud</h3>                              
                        </div>
                        <div class="titulo">
                            <h4>Conocé los beneficios naturales de los alimentos</h4>
                        </div>
                    </div>

                    <div class="container-fluid contListaAlimentos">
                        <ListaAlimentos/>
                    </div>
                </div>

                {/* info dolar */}
                <div class="container-fluid contSegundoDIV">
                    <div class="container conttitulosMed">
                        <div class="titulos">
                            <h3>Info útil para Argentinos</h3>                              
                        </div>
                    </div>

                    <div class="container contListaAlimentos">
                        <iframe src="https://dolarhoy.com/i/cotizaciones/dolar-blue"  className="dolar"/>
                        <iframe  src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio"  className="dolar"/>
                        <iframe  src="https://dolarhoy.com/i/cotizaciones/dolar-mep"  className="dolar"/>
                    </div>
                </div>

            </div>

            <Footer/>
        </div>        
    )
}

export default LandingPage