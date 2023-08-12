import "./estilos.css";
import NavBar from '../NavBar';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecetas } from "../../redux/actions";


function LandingPage() {

    //const allRecetas = useSelector(state => state.allRecetas);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecetas(0))
    }, [dispatch]);

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