//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import Error from "./Error";
import Ok from "./Ok";


function Card({nombreUsuario, peliculaFav, enviado, resetEnviado}) {

  function nombreValidado() {
    return nombreUsuario.length >= 3 && nombreUsuario[0] !== ' ';
  }

  function peliculaValidada() {
    return peliculaFav.length >= 6;
  }

  return (
    <div>
      {enviado ? (
        nombreValidado() && peliculaValidada() ? (
          <>
          <Ok nombreUsuario={nombreUsuario} peliculaFav={peliculaFav} />
          {/* {resetEnviado(false)}  NO FUNCIONANDO*/}
          </>
        ) : (
          <>
          <Error />
          {/* {resetEnviado(false)} NO FUNCIONANDO*/}
          </>
        )
      ) : (
        <>

        </>
      )}
    </div>
  );
}

export default Card;
