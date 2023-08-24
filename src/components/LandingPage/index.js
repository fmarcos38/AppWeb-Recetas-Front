import "./estilos.css";
import NavBar from '../NavBar';
import ListaRecetasMuestra from "./ListaRecetasDeMuestra";

import vegan from "../../imagenes/símbolo-vegetariano.jpg";
import gluten from "../../imagenes/glutenFree.jpg";
import keto from "../../imagenes/keto.jpg";
import paleo from "../../imagenes/paleo.avif";
import proteica from "../../imagenes/proteica.jpg";
import ListaAlimentos from "./ListaAlimentos";


function LandingPage() {


    return (
        <div class="container-fluid contGralLand">
            <NavBar/>
            <div >                
                <div class="row">
                    <div class="container col-2 contColIzq">
                        <h6 className="titulos">Algunas de nuestras recetas</h6>
                        <ListaRecetasMuestra />
                    </div>
                    
                    <div class="container col contColMedio">
                        <div class="container conttitulosMed">
                            <div class="titulos">
                                <h3>No sabés que cocinar?</h3>                              
                            </div>
                            <div class="titulos">
                                <h4>Te damos las mejores ideas para cada tipo de dieta...</h4>
                            </div>
                        </div>                        
                        <div class="contBtnreg">
                            <a href='/registrarse ' class="btn btn-secundary btnLReg">Registrarse</a>
                        </div> 
                    </div>
                    
                    <div class="container col-1 contColDer">
                        <h6 className="titulos">Dietas</h6>
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
                
                {/* Info alimentos */}
                <div class="container-fluid contSegundoDIV">
                    <div class="container conttitulosMed">
                        <div class="titulos">
                            <h3>Salud</h3>                              
                        </div>
                        <div class="titulos">
                            <h4>Conocé los beneficios naturales de los alimentos</h4>
                        </div>
                    </div>

                    <div class="container contListaAlimentos">
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
                        <iframe src="https://dolarhoy.com/i/cotizaciones/dolar-blue" frameborder="0" className="dolar"/>
                        <iframe  src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio" frameborder="0" className="dolar"/>
                        <iframe  src="https://dolarhoy.com/i/cotizaciones/dolar-mep" frameborder="0" className="dolar"/>
                    </div>
                </div>

            </div>
        </div>        
    )
}

export default LandingPage