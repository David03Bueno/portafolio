import portafo from "../pages/Portafolio.module.css";
import React from "react";

import login from "../assets/Images/LoginWebCitas.png";
import registro from "../assets/Images/ResgitroWebCitas.png";
import formulario from "../assets/Images/FormRegistroWebCitas.png";
import Dash from "../assets/Images/DashboardWebCitas.png";
import admin from "../assets/Images/AdminWebCitas.png";

import loginJava from "../assets/Images/LoginJavaCitas.jpg";
import registroJava from "../assets/Images/RegisLoginJavaCitas.png";
import inicioJava from "../assets/Images/InicioJavaCitas.png";
import ayudaJava from "../assets/Images/AyudaJavaCitas.png";
import agendarJava from "../assets/Images/AgendarJavaCitas.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import icon_cshar from "../assets/Icons/Icon_cshar.png";
import icon_css from "../assets/Icons/Icon_css.png";
import icon_git from "../assets/Icons/Icon_git.png";
import icon_html from "../assets/Icons/Icon_html.png";
import icon_java from "../assets/Icons/Icon_java.png";
import icon_js from "../assets/Icons/Icon_js.png";
import icon_mySql from "../assets/Icons/Icon_mysql.webp";
import icon_net from "../assets/Icons/Icon_net.png";
import icon_sqlserver from "../assets/Icons/Icon_sqlServer.png";
import icon_vue from "../assets/Icons/icons8-ver-js-48.png";
import icon_react from "../assets/Icons/images_react.png";

function Portafolio() {
  const settings = {
    dots: true, // Puntos de navegación
    infinite: true, // Ciclo infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Cuántas imágenes mostrar a la vez
    slidesToScroll: 1, // Cuántas imágenes pasar por transición
    arrows: true, // Flechas de navegación
  };

  const images = [login, registro, formulario, Dash, admin];
  const images2 = [loginJava, registroJava, inicioJava, ayudaJava, agendarJava];

  return (
    <div className={portafo.Constains1}>
      <div className={portafo.contenedor}>
        <h1>Proyectos Personales</h1>
        <div className={portafo.webCitas}>
          <div className={portafo.webcontenido}>
            <h2>Clínica Buenos</h2>
            <p>
              El sistema “Clínica Buenos” es una solución desarrollada para
              gestionar las citas médicas de la institución de manera más
              efectiva y óptima. Los pacientes podrán agendar sus citas con los
              diferentes doctores disponibles, junto con sus respectivos
              horarios y especialidades.
            </p>
            <p>
              El sistema incluye diversos módulos que abarcan desde el inicio de
              sesión (login), registro, formulario para agendar citas y consulta
              de citas, hasta funcionalidades administrativas, como el módulo
              para la gestión de doctores, administradores y un panel de control
              (dashboard) para administrar las citas.
            </p>
            <div className={portafo.Iconos}>
              <h2>Tecnologías</h2>
              <img src={icon_cshar} width={60} height={60} />
              <img src={icon_net} width={60} height={60} />
              <img src={icon_js} width={60} height={60} />
              <img src={icon_html} width={60} height={60} />
              <img src={icon_css} width={60} height={60} />
              <img src={icon_sqlserver} width={60} height={60} />
            </div>
          </div>
          <div
            style={{
              width: "50%",
              margin: "auto",
              marginTop: "auto",
              marginRight: "10px",
            }}
          >
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className={portafo.webCitas2}>
          <div className={portafo.webcontenido2}>
            <h2>Clínica Mi Sonrisa</h2>
            <p>
              El sistema de agenda de citas “Clínica Mi Sonrisa” es una solución
              desarrollada para gestionar las citas médicas de la institución de
              una manera más efectiva y óptima. Los pacientes podrán agendar sus
              citas con los diferentes doctores disponibles, junto con sus
              respectivos horarios y especialidades.
            </p>
            <p>
              El sistema incluye funcionalidades como el inicio de sesión,
              registro de usuarios, agendamiento y consulta de citas, así como
              un módulo de ayuda para brindar soporte y acceso a un manual que
              facilita la gestión de las citas.
            </p>
              <h3>Tecnologías</h3>
            <div className={portafo.Iconos3}>
              <img src={icon_java} width={60} height={60} />
              <img src={icon_mySql} width={60} height={60} />
              <img src={icon_git} width={60} height={60} />
            </div>
          </div>
          <div
            style={{
              width: "50%",
              margin: "auto",
              marginTop: "auto",
              marginRight: "10px",
            }}
          >
            <Slider {...settings}>
              {images2.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portafolio;
