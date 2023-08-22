import "./estilos.css";
import NavBar from '../NavBar';
import ListaRecetasMuestra from "./ListaRecetasDeMuestra";

import vegan from "../../imagenes/símbolo-vegetariano.jpg";
import gluten from "../../imagenes/glutenFree.jpg";
import keto from "../../imagenes/keto.jpg";
import paleo from "../../imagenes/paleo.avif";

function LandingPage() {


    return (
        <>
            <NavBar/>
            <div class='container-fluid '>
                <div class="container-fluid contTitulos">
                    <div class="titulos">
                        <h1>No sabés que cocinar?</h1>                        
                    </div>
                    <div class="titulos">
                        <h2>Te damos las mejores ideas para cada tipo de dieta...</h2>
                    </div>               
                </div>
                
                <div class="row">
                    <div class="container col-2 contColIzq">
                        <h6>Algunas de nuestras recetas</h6>
                        <ListaRecetasMuestra />
                    </div>
                    
                    <div class="container col contColMedio">
                        {/* registrarse */}
                        <a href='/registrarse ' class="btn btn-secundary btnLReg">Registrarse</a>
                    </div>
                    
                    <div class="container col-2 contColDer">
                        <h6>Tipos de Dietas</h6>
                        <div class="container">
                            <img src={vegan} alt="" className="imgDietas"/>
                            <img src={gluten} alt="" className="imgDietas"/>
                        </div>
                        <div class="container">
                            <img src={keto} alt="" className="imgDietas"/>
                            <img src={paleo} alt="" className="imgDietas"/>
                        </div>
                    </div>
                </div>
            </div>
        </>        
    )
}

export default LandingPage