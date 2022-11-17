import Card from "./Card";
import axios from 'axios';
import { useState, useEffect } from "react";

function Principal() {
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
      <div className="">
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
  );
}

export default Principal;
