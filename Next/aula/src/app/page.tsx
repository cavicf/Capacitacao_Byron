'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  let variableCount = 0;
  const handleVariableClick = () => {
    variableCount = variableCount + 1;
    console.log(variableCount)
  }

  const [stateCount, setStateCount] = useState(0);
  useEffect(()=> {
    console.log('efeito colateral ativado');
  }, [stateCount]);
  const handleStateClick = () => {
    setStateCount(stateCount + 1);
  }

  return (
    <div>
      <div>
        <h2>Contador com Variável</h2>
        <p>Valor: {variableCount}</p>
        <button onClick={handleVariableClick}>Incrementar</button>
      </div>
      <hr />
      <div>
        <h2>Contador com Variável</h2>
        <p>Valor: {stateCount}</p>
        <button onClick={handleStateClick}>Incrementar</button>
      </div> 
    </div>
  );
}
