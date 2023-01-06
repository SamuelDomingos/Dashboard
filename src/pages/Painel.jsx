import { useEffect, useState } from "react";

import Header from "../components/Header";
import ListPaises from "../components/ListPaises";
import './Painel.css';

const nomePaises = import.meta.env.VITE_PAISES_API_NOME
const indicadorPIB = import.meta.env.VITE_PAISES_API_INDICADORE

const Painel = () => {

  const [paises, setPaises] = useState([]);

  const getPaises = async (url) => {
    const res = await fetch(url)
    const data = await res.json();

    setPaises(data);
  }


  useEffect(() => {

    const nomeURL = `${nomePaises}`

    getPaises(nomeURL);

  }, [])

  return (
    <div className="panel">

      <div className="panel-introdution flex">

        <div className="panel-introdution-title">
        <h2>Ola, bem vindo Samuel !</h2>
            <p>Fusce sollicitudin, dolor id pulvinar tempus, dolor sapien tincidunt risus, at vulputate lacus leo non augue. Cras placerat vel lacus id rutrum. Quisque feugiat dui at fermentum rutrum. Proin non orci feugiat, rutrum augue at, tempus nibh. Duis sapien nisi, viverra non luctus non, euismod id ipsum. Mauris hendrerit metus nec dolor egestas, vel gravida ex fermentum. Suspendisse nec ex quis erat laoreet ultrices. Integer eu tellus ut massa interdum congue eu ac nisi. Phasellus non lectus vel neque gravida tristique. Sed tristique nisl in porttitor auctor.</p>
        </div>

        <div className="panel-introdution-data">
            <h2>Ultima visita a:</h2>
            <h2>5 dias</h2>
        </div>

      </div>

      <div className="component-list">

        <div className="component-list-detail flex">
            <h2>Países</h2>

            <div className="list2 flex">
              <h2>Localização(continente)</h2>
              <h2>Economia</h2>
              <h2>Moeda</h2>
            </div>
        </div>


        <div className="paises-container">
          {paises.length > 0 && paises.map((pais) => <ListPaises pais={pais}/>)}
        </div>
      </div>

    </div>
  )
}

export default Painel