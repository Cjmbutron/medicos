import React, { useState } from 'react';

const SeccionDeFiltros = () => {
    const [filtro, setFiltro] = useState('todos'); // Estado para almacenar el filtro seleccionado
    const [resultados, setResultados] = useState([
      { id: 1, nombre: 'Elemento A', categoria: 'categoria1' },
      { id: 2, nombre: 'Elemento B', categoria: 'categoria2' },
      { id: 3, nombre: 'Elemento D', categoria: 'categoria1' },
      { id: 4, nombre: 'Elemento A', categoria: 'categoria1' },
      { id: 5, nombre: 'Elemento A', categoria: 'categoria1' },
      { id: 6, nombre: 'Elemento C', categoria: 'categoria1' },
      { id: 7, nombre: 'Elemento C', categoria: 'categoria1' },
      // ... más elementos
    ]);
  
    const handleFiltroChange = (event) => {
      setFiltro(event.target.value);
    };
  
    const handleFiltrarClick = () => {
      // Aplicar el filtro a los resultados
      const resultadosFiltrados = resultados.filter((item) => {
        // Filtrar por categoría si se selecciona un filtro específico
        return filtro === 'todos' || item.categoria === filtro;
      });
  
      // Actualizar los resultados filtrados
      setResultados(resultadosFiltrados);
    };
  
    return (
      <div>
        <select value={filtro} onChange={handleFiltroChange}>
          <option value="todos">Todos</option>
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
          {/* Agrega más opciones de filtro según sea necesario */}
        </select>
  
        <button onClick={handleFiltrarClick}>Filtrar</button>
  
        <div>
          <h3>Resultados:</h3>
          <ul>
            {resultados.map((resultado) => (
              <li key={resultado.id}>{resultado.nombre} - {resultado.categoria}</li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default SeccionDeFiltros;