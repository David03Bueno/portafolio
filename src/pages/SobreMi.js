import foto from "../assets/retrato.jpg";
import sobre from "./SobreMi.module.css";
// import Button from '@mui/material/Button';
import  icon_cshar  from "../assets/Icons/Icon_cshar.png";
import  icon_css  from "../assets/Icons/Icon_css.png";
import  icon_git  from "../assets/Icons/Icon_git.png";
import  icon_html  from "../assets/Icons/Icon_html.png";
import  icon_java  from "../assets/Icons/Icon_java.png";
import  icon_js  from "../assets/Icons/Icon_js.png";
import  icon_mySql  from "../assets/Icons/Icon_mysql.webp";
import  icon_net  from "../assets/Icons/Icon_net.png";
import  icon_sqlserver  from "../assets/Icons/Icon_sqlServer.png";
import  icon_vue  from "../assets/Icons/icons8-ver-js-48.png";
import  icon_react  from "../assets/Icons/images_react.png";

function SobreMi() {
  return (
    <div className={sobre.Constains1}>
      <div className={sobre.contenedor}>
        <div className={sobre.imagen}>
          <img src={foto} width={200} height={200} />
          <div className={sobre.portada}>
            <h1>¡Hola!👋</h1>
            <h2>Soy Luis David Bueno</h2>
            <button className="button1" >Desarrollador De Software</button>
          </div>
        </div>
        <p>
          <strong>
            Con el título de Técnico Profesional en Desarrollo y Administración
            de Aplicaciones Informáticas, obtenido en el Instituto Politécnico
            Ramón Dubert Novo, comencé mi camino en el mundo de la informática.
            Motivado por aprender nuevas herramientas, decidí adentrarme en el
            ámbito de las computadoras, realizando diversos cursos en INFOTEP.
            Uno de estos cursos fue el de "Instalación, Configuración,
            Mantenimiento y Reparación de Computadoras", el cual, tras
            completarlo, me permitió conseguir mi primer empleo en el área como
            informático en el Supermercado Central. Posteriormente, tuve la
            fortuna de obtener una beca otorgada por el MESCYT para estudiar la
            carrera de Desarrollo de Software en el Instituto Tecnológico de las
            Américas (ITLA), programa que estoy próximo a culminar en 2025. Mi
            objetivo profesional es contribuir al crecimiento de una empresa o
            entidad mediante el desarrollo de soluciones de software innovadoras
            y eficientes. Aspiro a aplicar y perfeccionar mis habilidades
            técnicas, colaborar activamente en equipo y brindar un servicio de
            excelencia. Me comprometo a cumplir con responsabilidad las metas
            asignadas y a promover el éxito de los proyectos tecnológicos de la
            organización.
          </strong>
        </p>
      </div>
      <div className={sobre.conocimientos}>
        <h2>Habilidades</h2>
        <div className={sobre.Iconos}>
        <img src={icon_cshar} width={60} height={60}/>
        <img src={icon_net} width={60} height={60}/>
        <img src={icon_java} width={60} height={60}/>
        <img src={icon_js} width={60} height={60}/>
        <img src={icon_vue} width={60} height={60}/>
        <img src={icon_react} width={60} height={60}/>
        <img src={icon_html} width={60} height={60}/>
        <img src={icon_css} width={60} height={60}/>
        <img src={icon_sqlserver} width={60} height={60}/>
        <img src={icon_mySql} width={60} height={60}/>
        <img src={icon_git} width={60} height={60}/>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
