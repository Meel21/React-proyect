import Titulo from "../Titulo/Titulo/Titulo"

export default function Input ({placeholder,saludar}){
    return (
     <div>
         <Titulo greeting='Saludo' />
       <input type='text' placeholder={placeholder} />
       <button onClick= {saludar}> Saludar</button>
     </div>
  
    )
  
  
  }