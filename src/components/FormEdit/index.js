import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./estilos.css";
import Swal from "sweetalert2";
import userLog from '../../localStorage';
import { elim_diet_db, getRecetaById, resetDetalle } from '../../redux/actions';
import { useParams } from 'react-router-dom';

function FormEdit() {
    
    const userStorage = userLog.getUserActual();     

    const { _id } = useParams();
    const recetaD = useSelector(state => state.detalleReceta);
    const dispatch = useDispatch();

    const initialState = {
        title: "",
        image: null,
        diets: [],
        analyzedInstructions: []
    };    
    
    //estado grupo de carga
    const [grupo, setGrupo] = useState(1);
    //estado receta
    const [receta, setReceta] = useState(initialState);
    //estado error
    const [errors, setErrors] = useState(initialState);
    //estado pre imagen
    const [vistaPrevia, setVistaPrevia] = useState("");//vista previa
    const tiposDietas = useSelector(state => state.TiposDietas);
    //estado y contador d paso a paso
    const [paso, setPaso] = useState("");
    const [contadorP, setContadorP] = useState(1);
    //estado y contador de Ingredientes
    const [ingrediente, setIngrediente] = useState("");
    const [ingredientes, setIngredientes] = useState([]);
    const [contadorPIng, setContadorIng] = useState(1);

    useEffect(() => {
        dispatch(getRecetaById(_id));
        
        return () => {
            dispatch(resetDetalle());
        }
    }, [_id, dispatch]);


    //funcion para manipulación de la pre-imagen
    const previewFile = (file) => {
        const reader = new FileReader();//lector de archivo
        reader.readAsDataURL(file);//convierte la img en una url
        reader.onloadend = () => {
            setVistaPrevia(reader.result);
        };
    };
    const handleCH = (e) => {
        if(e.target.id === 'image'){
            setReceta({...receta, image: e.target.files[0]});
            previewFile(e.target.files[0]);//invoco la funcio q muestra la pre-imagen
        }else if(e.target.id === 'diets'){
            //busca si ya existe esa dieta
            let dieta = receta.diets.find(d => d.tipo === e.target.value);
            if(dieta){alert("Ya se ingresó ese type")}
            else{setReceta({...receta, diets: [...receta.diets, e.target.value]})}
        }else if(e.target.id === 'paso'){
            setPaso(e.target.value);
        }else if(e.target.id === 'ingrediente'){
            setIngrediente(e.target.value);
        }else{
            setReceta({...receta, [e.target.id]:e.target.value});
        }
    };
    //btn Sgt
    const onClickBtnSgt = () => {
        setGrupo(grupo + 1);   
    };
    //btn atras
    const onClickBtnAtras = () => {
        if(grupo === 1){
            return
        }else{
            setGrupo(grupo - 1);
        }
    };
    //elim dieta existente(la q viene de la DB)
    const handlerDeleteDietaExistente = (dietExist) => {
        dispatch(elim_diet_db({_id:_id, dieta:dietExist}))
    };
    //elim dieta
    const handlerDeleteDieta = (dieta) => {
        setReceta({...receta, diets: receta.diets.filter(d => d !== dieta)})
    };
    const handleSub = async (e) => {
        e.preventDefault();
        const newErrors = {...errors}; //array errores
        //errores        
        if(!recetaD.title){
            newErrors.title = "Ingrese titulo";
        }
        if(!recetaD.diets[0]){
            newErrors.diets = "Ing un tipo de dieta";
        }
        if(!recetaD.analyzedInstructions[0]){
            newErrors.analyzedInstructions = "Ing un tipo de dieta";
        }
        //actualizo errores
        setErrors(newErrors);
        if(!recetaD.title || !recetaD.diets[0] || !recetaD.analyzedInstructions[0]){
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Faltan datos verifique!!',
                showConfirmButton: false,
                timer: 2000
            });
        }else{
            try {
                let formData = new FormData();
                formData.append("title", recetaD.title);
                formData.append('image', recetaD.image);
                formData.append("diets", recetaD.diets);
                formData.append("analyzedInstructions", recetaD.analyzedInstructions);

                await fetch(`http://localhost:8000/recetas/createR`, {
                    method: "POST",
                    body: formData,
                });
                    Swal.fire({
                        icon: 'success',
                        title: 'Creado correctamente!!',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setReceta(initialState);
                    setGrupo(1);
                
            } catch (error) {
                console.log(error);
            }
        }        
    };


    return (
        <div>
        {
            userStorage.user.role !== "admin" ?
            <>
                <span>No tiene los permisos necesarios</span>
            </>
            :
            <div class="contGralCR">     
            <form class="container contForm" onSubmit={handleSub}>
                <h3 class="tituloReceta">Modificar Receta existente:</h3>
                {/* Grupo 1 */}
                {
                    grupo === 1 &&
                    <div class='container-fluid grupo1'>                        
                        {/* titulo */}
                        <div class="contInputLabel">
                            <label class="form-label labelCR">Titulo receta</label>
                            <input type="text" id="title" value={recetaD.title} onChange={handleCH} class="form-control inputCR" /* placeholder={recetaD.title} *//>
                            {!receta.title && <span className="error-message">{errors.title}</span>}
                        </div>
                        {/* image */} 
                        <div class="contInputLabel">
                            <label class="form-label labelCR">Imagen del prod: </label>
                            <input  type="file" accept="image/*" id="image" onChange={handleCH} class="form-control inputCR"/>
                            
                        </div>
                        {/* muestra img previa */}
                        <div>
                            <img src={recetaD.image} alt="Sin cargar" className={"imgPre"}/>
                        </div>
                        <div>
                            <button disabled={!errors} class="btn btn-dark btnSgt" onClick={onClickBtnSgt}>Siguiente</button>
                        </div>
                    </div>
                }

                {/* Grupo 2 */}
                {/* dietas */}
                {
                    grupo === 2 &&
                    <div class='container-fluid grupo1'>
                        {/* muestra los types exist*/}
                        <div class="contInputLabel">
                                <label class="form-label labelCR">Tipos de Dietas agregadas:</label>
                                    {
                                        recetaD.diets?.map(dieta => {
                                            return (
                                                <div key={dieta.name} class="row">
                                                    <div class="col-1 contBtnElimDieta">
                                                        <button type="button" class="btn btn-danger btnElimDieta" onClick={() => handlerDeleteDietaExistente(dieta.name)}>X</button>
                                                    </div>
                                                    <div class="col">
                                                        <span className="tipoDieta">{dieta.name}</span>
                                                    </div>
                                                </div>
                                            );
                                        }) 
                                            
                                    }
                                </div>
                        {/* dietas */}
                        <div class="contInputLabel">
                                <label class="form-label labelCR">Tipos de Dietas</label>
                                <select class="form-select inputCR" onChange={handleCH} id='diets'>
                                    <option>Menu</option>
                                {
                                    tiposDietas.map(d => {
                                    return(
                                        <option key={d._id} value={d.tipo} class="labelCR">
                                            {d.tipo}
                                        </option>
                                    )                
                                    })
                                }
                                </select>
                                {!receta.diets[0] && <span className="error-message">{errors.diets}</span>}

                                {/* muestra los types seleccionads*/}
                                <div class="contInputLabel">
                                <label class="form-label labelCR">Tipos de Dietas agregadas:</label>
                                    {
                                        receta.diets.map((dieta, index) => {
                                            return (
                                                <div key={index} class="row">
                                                    <div class="col-1 contBtnElimDieta">
                                                        <button type="button" class="btn btn-danger btnElimDieta" onClick={() => handlerDeleteDieta(dieta)}>X</button>
                                                    </div>
                                                    <div class="col">
                                                        <span className="tipoDieta">{dieta}</span>
                                                    </div>
                                                </div>
                                            );
                                        }) 
                                            
                                    }
                                </div>
                        </div>
                        <div>
                            <button class="btn btn-dark btnSgt" onClick={onClickBtnAtras}>Atrás</button> 
                            <button class="btn btn-dark btnSgt" onClick={onClickBtnSgt}>Siguiente</button>
                        </div>
                    </div>
                }                
            </form>
            </div>
        }
        </div>
    )
}

export default FormEdit