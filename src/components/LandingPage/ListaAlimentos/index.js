import React from 'react'
import "./estilos.css";


function ListaAlimentos() {

    const arrayAlimentos = [
        {
            title: 'Curcuma',
            description: "Milagrosa. Dicen las buenas y entendidas lenguas que la nueva estrella de los especieros es, sin temor a exagerar, milagrosa. No solo tiñe de dorado y sazona los platos que toca, sino que es uno de los caballitos de batalla más poderosos y multitasking de la medicina ayurvédica",
            contenido: "Desde el punto de vista nutricional, el oro en polvo de India es un aliado de la salud. El componente más importante de la raíz se llama curcumina, y a ella le debemos los superpoderes que la catapultaron al estrellato: es un activo antiinflamatorio, antioxidante, antiséptico, antitumoral y antibacterial. Mejora la digestión, cuida la salud del hígado, favorece la circulación de la sangre, disminuye el colesterol malo (LDL) y estimula el sistema inmunológico. ¿Algo más? Sí, es muy utilizada para tratar enfermedades más graves como diabetes, trastornos cardiovasculares, Alzheimer, depresión y obesidad. Bajado a tierra, la cúrcuma es un potente analgésico natural para los dolores de cabeza, óseos, de garganta, menstruales y articulares. Cuida la salud bucal, ayuda a eliminar las bacterias del organismo y a mejorar los estados gripales y de las vías respiratorias. A nivel tópico, es muy usada en el cuidado de la piel porque cicatriza, evita infecciones de las heridas y el desarrollo de hongos y tiene buen efecto sobre el acné.",
            image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/internal_990/public/2023-08/gettyimages-1317343720.jpg.webp?itok=HeJciX9J"
        },
        {
            title: 'Lengumbres',
            description: "las legumbres son ricas en fibra lo cual mantiene en mejor forma la salud de nuestro sistema digestivo, y reduce los riesgos de sufrir enfermedades cardiovasculares. Son bajas en contenido graso y no tienen colesterol y por ello contribuyen a la prevención de enfermedades cardiovasculares",
            contenido: "Otra característica es que pueden ser almacenadas en lugares frescos y secos durante períodos prolongados, para ser consumidas a lo largo del año, con la alternativa de frisarlas ya cocidas. Asimismo, son una muy rica fuente de hierro ayudando a prevenir problemas de anemia, y una manera de ayudar a la absorción del hierro por las paredes del intestino, es acompañarlas en la misma comida con alimentos ricos en vitamina C como por ejemplo el tomate, el ají morrón, cítricos como el limón, la naranja o el kiwi que también es rico en la referida vitamina. Otro elemento que brindan las legumbres es el potasio, que favorece el buen funcionamiento del corazón, los músculos y del sistema digestivo",
            image: "https://i.blogs.es/23a158/legumbres/840_560.jpg"
        },
        {
            title: 'Kale',
            description: "Contiene fibra, antioxidantes, calcio, vitaminas C y K, hierro y una gran variedad de otros nutrientes que pueden ayudar a prevenir diversos problemas de salud. Los antioxidantes ayudan al cuerpo a eliminar toxinas no deseadas que resultan de procesos naturales y presiones ambientales.",
            contenido: [                
                "Diabetes",
                "La Asociación Americana de Diabetes recomienda consumir alimentos ricos en vitaminas, minerales, fibra y antioxidantes. Hay evidencia de que algunos de los anteriores pueden ofrecer protección contra la diabetes.",
                "Fibra: un estudio de 2018 concluyó que las personas que consumen las mayores cantidades de fibra dietética parecen tener un menor riesgo de desarrollar diabetes tipo 2. El consumo de fibra dietética también podría reducir los niveles de glucosa en sangre, señalan los autores.",
                "Antioxidantes: los autores de un artículo de 2012 señalan que los altos niveles de azúcar en la sangre pueden activar la producción de radicales libres. Señalan que los antioxidantes, como la vitamina C y el ácido alfa-linolénico, pueden ayudar a reducir las complicaciones que pudieran presentarse con la diabetes. Ambos antioxidantes están presentes en la col rizada.",
                "Enfermedad cardíaca",
                "Varios nutrientes en la col rizada pueden apoyar la salud del corazón.",
                "Potasio: la Asociación Americana del Corazón (AHA, por sus siglas en inglés) recomienda aumentar la ingesta de potasio y reducir el consumo de sal añadida o sodio. Esto, según la Asociación Americana del Corazón, puede reducir el riesgo de hipertensión y enfermedad cardiovascular. Una taza de col rizada cocida aporta el 3.6 por ciento de las necesidades diarias de potasio de un adulto.",
                "Fibra: una revisión de Cochrane de 2016 encontró un vínculo entre el consumo de fibra y un bajo nivel de lípidos (grasa) en la sangre y de presión arterial. Las personas que consumían más fibra tenían más probabilidades de presentar niveles más bajos de colesterol total y lipoproteína de baja densidad (LDL), o colesterol malo.",
                "Cáncer",
                "Clorofila: la col rizada y otros vegetales verdes que contienen clorofila pueden ayudar a evitar que el cuerpo absorba aminas heterocíclicas. Estos químicos se producen cuando las personas asan alimentos derivados de animales a una temperatura alta. Los expertos los han relacionado con el cáncer.",
            ],            
            image: "https://i.blogs.es/238e46/7288148804_3d71c2a98a_k/1366_2000.jpg"
        },
        {
            title: 'Limón',
            description: "Refuerza el sistema inmunológico. Los limones son ricos en vitamina C, ideal para combatir los resfriados. Son ricos en potasio, que estimula la función del cerebro y los nervios. El potasio también ayuda a controlar la presión sanguínea.",
            contenido: [
                "Balancea el pH del cuerpo: Reduce la acidez total del cuerpo. El limón es uno de los alimentos más alcalinos. Sí, el limón tiene ácido cítrico, pero no crea acidez en el cuerpo una vez es metabolizado.",
                "Ayuda a bajar de peso: Los limones son ricos en fibra pectina (fibra soluble) que ayuda a combatir los antojos de comida. También se ha demostrado que las personas que mantienen una dieta más alcalina pierden peso más rápidamente.",
                "Favorece la digestión: El jugo de limón ayuda a eliminar los materiales no deseados del cuerpo. Estimula al hígado para producir la bilis, requerida para la digestión y reduciendo la acidez estomacal y el estreñimiento.",
                "Es un diurético: Los limones aumentan la velocidad de la micción (orinar) en el cuerpo, lo cual ayuda a purificarlo. Las toxinas son liberadas más rápidamente del cuerpo, lo que ayuda a mantener la salud del tracto urinario."
            ],
            image: "https://www.gaia.com/wp-content/uploads/10-Razones-Para-Beber-Agua-Con-Lim%C3%B3n-Por-Las-Ma%C3%B1anas-768x432.jpg"
        },
        {
            title: 'Jengibre',
            description: "También conocido como kion, crece en las regiones tropicales de todo el mundo y es famoso, tanto por sus reconocidas propiedades medicinales, como por su uso culinario. Aunque su origen inicial es de China, cultura que popularizó los usos de esta planta a través de su medicina natural.",
            contenido: [
                "Alivia los dolores reumáticos y menstruales. Es un potente antiinflamatorio y analgésico, por lo que también disminuye las migrañas y jaquecas.",
                "Previene el envejecimiento prematuro y reduce los niveles de estrés, convirtiéndose en un antidepresivo natural.",
                "Erradica los mareos y los vértigos, antivomitivo natural.",
                "Es un afrodisíaco natural: mejora los problemas de erección y aumenta la libido.",
                "Reduce problemas digestivos: gases, diarreas, úlceras y gastritis.",
                "Muy eficaz contra la gripe y los resfriados, es un excelente antibacteriano.",
                "Es un vasodilatador y anticoagulante natural que reduce los riesgos de enfermedades cardiovasculares y mejora el riego sanguíneo.",
            ],
            image: "https://www.gaia.com/wp-content/uploads/Propiedades-del-jengibre-768x432.jpg"
        },
        {
            title: 'Palta',
            description: "Considerada como uno de los alimentos más completos de la tierra -contiene todo lo que une persona necesita para sobrevivir-, esta fruta incluye una amplia variedad de nutrientes. Ácido fólico, fibra, luteína, potasio, hierro, fósforo, magnesio y, el verdadero secreto, doce de las trece vitaminas diferentes que existen, con un alto contenido de los complejos B y E son algunos de sus componentes",
            contenido: [
                "Es antioxidante: su alto contenido en vitaminas A, B6, C y E convierten a la palta en un gran aliado contra las arrugas. ¿Sabías que una serie de investigaciones realizadas por la Universidad de California en Los Ángeles mostraron que la palta tiene más vitamina E que cualquier otro fruto? Recordemos que la vitamina E es un potente antioxidante capaz de desacelerar el proceso de envejecimiento y disminuir los efectos dañinos de la exposición al sol. Por eso, atenta a este dato, especialmente ahora que estamos en verano: gracias a su aporte de vitamina E, la recomendación para utilizar palta en forma tópica después de un día de playa es muy interesante ya que ayuda reparar el daño provocado por la radiación",
                "Es hidratante: el aceite de palta es un aceite espeso, penetrante, que se absorbe muy rápidamente ya que se parece en su composición al sebo de la piel. Contiene ácidos poli insaturados (omega 3) que son necesarios para mantener la membrana plasmática de las células sana y reforzada, promoviendo la conservación de los niveles de hidratación. A su vez estos ácidos restauran la función de barrera de la epidermis y la inmunidad de la piel, explica Brenda Fontana,. Como si fuera poco, la palta contribuye en gran medida a suavizar la piel. Por eso es ideal para las que son secas y están maltratadas por el sol.",
                "Ayuda a tener el pelo sedoso y brillante: por sus vitaminas y poder antioxidante, permite una profunda hidratación del cuero cabelludo y otorga luminosidad al cabello. Pero eso no es todo. También lo protege y repara la fibra capital, de modo que evita su caída. ¡Por eso es tan utilizado en las fórmulas de las coloraciones que se presentaron en los últimos años!",
                "Actúa como bálsamo para la piel: además de su poder hidratante y suavizante, la palta es un gran regenerante y cicatrizante. La vitamina A que contiene es útil en el tratamiento del acné, la psoriasis y los efectos de la exposición solar como manchas y quemaduras. Por su parte, la vitamina C estimula la tersura y luminosidad del rostro, asegura la Dra. María Rolandi Ortiz, Directora del centro de estética Ro Medical Art.",
            ],
            image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/internal_990/public/2023-05/rulos-tendencia-cortes-2023_9.jpg.webp?itok=R-sB0ig9"
        },
    ];


    return (
        <div class="container contListaAlimentos">
            {
                arrayAlimentos.map(r => {
                    return(
                        <div class="card cardAlimento" >
                            <img src={r.image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{r.title}</h5>
                                <p class="card-text">{r.description}</p>
                                <a href="#" class="btn btn-primary">Go more</a>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ListaAlimentos


