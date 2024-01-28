import React, { useEffect } from "react";
import './css/hb.css';
import handleScroll from './ScriptScroll.js'; // Ajusta la ruta según la ubicación real de tu archivo

/*IMAGANES*/
import py from '../img/tec/python.png'
import c from '../img/tec/c.png'
import c_mas from '../img/tec/cmas.png'
import html from '../img/tec/html.png'
import css from '../img/tec/css.png'
import java from '../img/tec/JavaScript-logo.png'
import logReact from '../img/tec/react.png'
import mongDB from '../img/tec/mongodb.png'
import ndJS from '../img/tec/node.png'

const Habilties = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="cont-1">
            <h2>Habilidades</h2>

            <p>Como desarrollador, poseo una sólida base en diferentes tecnologías y lenguajes de programación. Mi experiencia incluye trabajar con Python, C, C++, HTML, CSS, JavaScript, React.js y Node.js. Estas habilidades me permiten abordar una variedad de proyectos y desafíos de desarrollo web. Además, estoy familiarizado con bases de datos como MongoDB, lo que me permite gestionar eficientemente la persistencia de datos en mis aplicaciones. Estoy comprometido con el aprendizaje continuo y la mejora constante para ofrecer soluciones tecnológicas efectivas y de alta calidad.</p>
            
            <div className="img-cont" id="imgContainer">
                <div className="img-cont-1">
                    <img src={py} alt="PYHTON" />
                    <img src={c} alt="C" />
                    <img src={c_mas} alt="C++" />
                    <img src={html} alt="HTML" />
                </div>
                <div className="img-cont-2">
                    <img src={css} alt="CSS" />
                    <img src={java} alt="JAVASCRIPT" />
                    <img src={logReact} alt="REACT.JS" />
                    <img src={ndJS} alt="NODE.JS" />
                </div>
          
                <img src={mongDB} alt="MONGODB" />
            </div>
        </div>
    );
}

export default Habilties;
