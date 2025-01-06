import contac from "../pages/Contacto.module.css";
import foto from "../assets/retrato.jpg";
import { Icon } from "@mui/material";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Para Gmail ícono
import { FaDownload } from "react-icons/fa";

function Contacto() {
  return (
    <div className={contac.Constains1}>
      <div class={contac.contenedor}>
        <div className={contac.webCitas}>
        <div className={contac.imagen}>
          <img src={foto} width={200} height={200} />
          <div className={contac.portada}>

  {/* Botón de WhatsApp */}
  <a
        href="https://wa.me/18096109024" /* Reemplaza con tu número de WhatsApp */
        className={contac.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={`${contac.button} ${contac.whatsapp}`}>
          <FaWhatsapp className={contac.icon} />
          WhatsApp
        </button>
      </a>

      {/* Botón de Gmail */}
      <a
        href="mailto:david03bueno@gmail.com" /* Reemplaza con tu correo electrónico */
        className={contac.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={`${contac.button} ${contac.gmail}`}>
          <MdEmail className={contac.icon} />
          Gmail
        </button>
      </a>

      {/* Botón de GitHub */}
      <a
        href="https://github.com/David03Bueno" /* Reemplaza con tu perfil de GitHub */
        className={contac.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={`${contac.button} ${contac.github}`}>
          <FaGithub className={contac.icon} />
          GitHub
        </button>
      </a>

      {/* Botón de LinkedIn */}
      <a
        href="https://linkedin.com/in/david-bueno-882a54293" /* Reemplaza con tu perfil de LinkedIn */
        className={contac.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={`${contac.button} ${contac.linkedin}`}>
          <FaLinkedin className={contac.icon} />
          LinkedIn
        </button>
      </a>      


          </div>
      <div className={contac.botonesContainer}>
        {/* Botón para descargar el currículum */}
        <a
          href="/Curriculum_LuisDavidBueno.pdf" /* Ruta del archivo en la carpeta public */
          download="Curriculum.pdf" /* Nombre del archivo al descargar */
          className={contac.link}
        >
          <button className={`${contac.button} ${contac.download}`}>
            <FaDownload className={contac.icon} />
            Descargar CV
          </button>
        </a>
      </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
