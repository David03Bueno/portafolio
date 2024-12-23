import fondo from '../assets/DALL·E 2024-12-22.webp'
import './Inicio.css'
function Inicio() {
    return(
        <div className="Constains">
            <div class="contenedor">
            <div class="presentacion">
                <h1>Bienvenido</h1>
                <h2> Desarrollador Backend y Frontend </h2>
                <p>
                ¡Bienvenido a mi portafolio personal! Soy un desarrollador junior 
                especializado en backend y frontend, apasionado por crear soluciones
                innovadoras y funcionales. Aquí encontrarás una muestra de mis proyectos, 
                habilidades y experiencia, donde combino el diseño atractivo del frontend con
                la lógica robusta del backend. ¡Gracias por visitar, y espero que disfrutes explorando mi trabajo! 🚀
                </p>

            </div>
            <div class="imagen">
                <figure>
                    <img src={fondo} alt="Imagen base" width={600} height={400}/>
                </figure>
            </div>

            </div>
        </div>
    );
}

export default Inicio;

