import "./estilos.css";
import NavBar from '../NavBar';


function LandingPage() {

    

    return (
        <>
            <NavBar/>
            <div class='container-fluid cont-principal'>
                <h1 class="container">Bienvenid@ al mndo de las recetas </h1>
                {/* <a href={'/home'}>
                    <button>Comenzar</button>
                </a> */}
            </div>
        </>        
    )
}

export default LandingPage