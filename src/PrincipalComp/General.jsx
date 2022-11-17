import Card from "./Card";
import axios from 'axios';
import { useState, useEffect } from "react";
import Megamenu from '../components/Megamenu'

const General = () => {
  const [arreglo2, setArreglo] = useState([]);

  useEffect(() => {
    const axiosConsulta = async (e) => {
      const resp = await axios('https://rickandmortyapi.com/api/character');
      const { results } = resp.data
      setArreglo(results);
    }

    axiosConsulta();
  }, []);
  return (
    <>
      <Megamenu />
        <div className="grid grid-cols-4 gap-4 p-10 pb-4 py-10 px-8">
          {
            arreglo2.map((arreglo, index) => (
              <Card
                key={index}
                arreglo={arreglo}
              />
            ))
          }
      </div>
    </>
  )
}

export default General
