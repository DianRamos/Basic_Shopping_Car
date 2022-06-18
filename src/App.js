// El componente App es el padre de:
// - Cabecera
import { useState } from "react";
import Cabecera from "./components/Cabecera";

// - Listado
import Listado from "./components/Listado";

function App() {

  // ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
const [count , setCount]= useState(0);

// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
const increment = () =>{
  setCount (count +1);
}
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

  return (
    <div className="App">
      <Cabecera elements= {count} />
      <Listado increment={increment}/>
    </div>
  );
}

export default App;
