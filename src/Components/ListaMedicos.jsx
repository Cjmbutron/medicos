import React from "react";

const medicos = [
    {   id:1,
        nombre: 'jose',
        apellido: 'perez',
        especilidad: 'cirujano',
        ciudad: 'la paz'
    },
    {  id:2,
        nombre: 'antonio',
        apellido: 'lopez',
        especilidad: 'odontologo',
        ciudad: 'santacruz'
    },
    {  id:2,
        nombre: 'antonio',
        apellido: 'lopez',
        especilidad: 'odontologo',
        ciudad: 'santacruz'
    },
    {  id:2,
        nombre: 'antonio',
        apellido: 'lopez',
        especilidad: 'odontologo',
        ciudad: 'santacruz'
    }
]

function ListaMedicos(){
    return (
        <div>
        {medicos.map(dato => (
        <div key={dato.id}>
            <img src="" alt="Fotografia medico"></img>
            {dato.nombre} {dato.apellido}
           <h1>{dato.especilidad}</h1>
           <p>{dato.ciudad}</p>
           <button> solicitar cita</button>
        </div> 
        
      ))}

        </div>

    );
}

export default ListaMedicos;