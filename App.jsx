import React from 'react';

function App() {
  // Obtener el texto del entorno desde las variables de entorno
  const textoEntorno = import.meta.env.VITE_TEXTO_ENTORNO;

  return (
    <div>
      <h1>Aplicación React</h1>
      <p>Texto de entorno: {textoEntorno}</p>
    </div>
  );
}

export default App;
