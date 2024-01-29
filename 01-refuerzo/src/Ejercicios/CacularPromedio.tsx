import React from 'react';

// Definir el tipo para los objetos alumno
type Alumno = {
  name: string;
  edad: number;
  calificacion: number;
};

// Función que recibe un arreglo de objetos alumno y retorna el promedio de las calificaciones
const calcularPromedio = (alumnos: Alumno[]): number => {
  // Obtener un arreglo con las calificaciones de todos los alumnos
  const calificaciones = alumnos.map((alumno) => alumno.calificacion);

  // Calcular el promedio
  const promedio =
    calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0) /
    calificaciones.length;

  return promedio;
};

// Componente que utiliza la función calcularPromedio
export const CalcularPromedio: React.FC = () => {
  // Ejemplo de arreglo de objetos "alumno"
  const alumnosEjemplo: Alumno[] = [
    {
      name: 'Viviana',
      edad: 19,
      calificacion: 10,
    },
    {
      name: 'Wendy',
      edad: 20,
      calificacion: 8,
    },
    {
      name: 'Gerson',
      edad: 18,
      calificacion: 9,
    },
  ];

  // Llamamos a la función calcularPromedio con el arreglo de ejemplo
  const promedio = calcularPromedio(alumnosEjemplo);

  return (
    <div>
      <h3>Calcular Promedio de Calificaciones</h3>
      <p>Arreglo de Alumnos:</p>
      <ul>
        {alumnosEjemplo.map((alumno, index) => (
          <li key={index}>
            {alumno.name} - Edad: {alumno.edad} - Calificación: {alumno.calificacion}
          </li>
        ))}
      </ul>
      <p>Promedio de Calificaciones: {promedio}</p>
    </div>
  );
};
export {};
