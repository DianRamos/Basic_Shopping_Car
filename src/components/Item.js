
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.



import React ,{ useState } from "react"

// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
const Item = ({increment,name,description,stock}) => {
const [available, setAvailable]= useState(stock);

const buy = () =>{
  setAvailable(available -1);
  increment();
}
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

  return (
    <div className='producto'>
       
        <h3>{name}</h3>
        <p>{description}</p>
        <h5><span>{available <1 ? "Sold Out" : available}</span></h5>
        <button disabled = {available < 1} onClick ={()=> {buy();}}>
          {available <= 0 ? "without products": "buy"}
        </button>
    
    </div>
  )
}
export default Item
