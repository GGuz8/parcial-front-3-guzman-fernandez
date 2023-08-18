import { useState } from "react";
import Card from './Card'

function App() {

  const [peliculas, setPeliculas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [pelicula, setPelicula] = useState('');
  const [enviado, setEnviado] = useState(false);

  const addPelicula = (peliculaObj) => {
    setPeliculas([...peliculas, peliculaObj]);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (nombre && pelicula) {
      addPelicula({ nombre, pelicula });
      setEnviado(true);
      setNombre('');
      setPelicula('');
    }else{
      setEnviado(false);
    }
  };

  const handleResetEnviado = () => {
    setEnviado(false);
  };

  return (
    <div className="App">
      <h1>Dinos tu película favorita</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingresa tu película favorita"
          value={pelicula}
          onChange={(e) => setPelicula(e.target.value)}
        />
        <button type="submit">Agregar película</button>
      </form>
      <Card nombreUsuario={nombre} peliculaFav={pelicula} enviado={enviado} resetEnviado={handleResetEnviado} />
    </div>
  );

}

export default App;
