import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/*COMPONENTES
======================================================================
*/
import ParticleBackground from "./components/ParticleBackground.jsx";
import ProyectCard from "./components/ProyectCard.jsx";
import Header from "./components/Header.jsx";
import Habilties from "./components/Habilties.jsx";

/*====================================================================
IMAGANES 
*/

import foto from './img/foto.jpg'
import IA from './img/IA.png'
import metro from './img/metro.png'



import './app.css'

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffff",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#0000",
        },
        links: {
          color: "#0000",
          distance: 180,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="app-container">
      {init && (
        <ParticleBackground>
          <Header />
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </ParticleBackground>

      )}

      <div className="card-container">
        <h1 className="card-text1">Hola soy</h1><h1 className="text1">Vicente Roa</h1>
        <p className="p-text">Ingeniero Informatico | Desarrollador front End Junior</p>
        <div>
          <img src={foto} alt="" className="img-fot"/>
        </div>
      </div>


      <div className="section1">
        <h2>SOBRE MI</h2>
        <p>Soy un estudiante apasionado de Ingeniería en Informática, constantemente motivado por las innovaciones tecnológicas que dan forma al mundo actual. Mi entusiasmo por explorar nuevas fronteras en la informática me impulsa a buscar oportunidades significativas en el mundo real. Estoy ansioso por adquirir experiencia práctica que no solo enriquezca mis habilidades técnicas, sino que también contribuya a mi crecimiento personal y profesional.
        Mi fascinación por los desafíos tecnológicos me impulsa a buscar oportunidades que amplíen mi horizonte y me ayuden a consolidar una base sólida en mi carrera. Como aspirante a profesional en Ingeniería en Informática, estoy decidido a formar parte de una organización moderna que abrace la innovación y persiga objetivos ambiciosos.
        Busco no solo un empleo, sino una experiencia en la que pueda contribuir con mis habilidades y aprender de un entorno dinámico. Estoy convencido de que la combinación de mi pasión por la tecnología, mi mentalidad proactiva y mi deseo constante de aprender me convertirán en un activo valioso para cualquier equipo.</p>
      </div>


      <div className="section2">
        <Habilties/>
      </div>


      <div className="section3">
        <h2>PROYECTOS</h2>
      </div>


      <div className="section4">
        <h2>PROYECTOS</h2>

        {/*PRIMERA TARJETA*/}

        <ProyectCard className="card"
        image={IA}
        title="CARDIOCARE IA"
        text="CardioCareIA, es una página web diseñada para ofrecer una experiencia fácil de usar y accesible para todos los usuarios. La plataforma permitirá a las personas ingresar sus datos médicos y de estilo de vida, que serán analizados mediante algoritmos avanzados de análisis de datos y aprendizaje automático"
        link="https://youtu.be/e771l30_fo4"
        />

        {/*SEGUNDA TARJETA*/}
        <ProyectCard className="card2"
        image={metro}
        title="Metro-Dijkstra"
        text="Este proyecto se centra en la aplicación de algoritmos y estructuras de datos para la determinación de posibles rutas hacia una estación del metro de Santiago. Se empleará la teoría y el algoritmo de Dijkstra para abordar este desafío, explorando su utilidad y complejidades."
        link="https://github.com/vicenteroa/Tarea-3-Metro-Santiago-Dijkstra"
        />
        {/*TERCERA TARJETA*/}

        <ProyectCard className="card3"
        
        />
      </div>
    </div>
    

  );
};

export default App;

