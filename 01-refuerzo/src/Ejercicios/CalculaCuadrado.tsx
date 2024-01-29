import React, { useState } from 'react';

// Función que calcula el área de un cuadrado
const calcularAreaCuadrado = (lado: number): number => {
  return lado * lado;
};

// Componente que utiliza la función calcularAreaCuadrado
export const CalculaCuadrado = () => {
  const [lado, setLado] = useState<number>(0);
  const [area, setArea] = useState<number | null>(null);

  const calcularArea = () => {
    const areaCalculada = calcularAreaCuadrado(lado);
    setArea(areaCalculada);
  };

  return (
    <div>
      <h3>Calcular Área de Cuadrado</h3>
      <label>Longitud del lado:</label>
      <input
        type="number"
        value={lado}
        onChange={(e) => setLado(parseFloat(e.target.value))}
      />
      <button onClick={calcularArea}>Calcular Área</button>
      {area !== null && <p>El área del cuadrado es: {area}</p>}
    </div>
  );
};
export {};


