import {useState} from 'react'
import  {postDatos}  from "services";

const API = "http://127.0.0.1:8000/api/proyecto/agregar";
  
export const useForm=(initialFrom,validateForm)=> {
   const [form, setForm] = useState(initialFrom);
   const [error, setError] = useState({});
   const [loading, setLoading] = useState(false);
   const [response, setResponse] = useState(null);

   /* Manejo del evento onChange de los inputs */
   const handleChange=(event)=>{
    const {name, value}=event.target;
    setForm({
      ...form,
      [name]:value
    });
  }
 
     /* Manejo de los errores de los inputs (se activa al quitar el foco de algun input)*/
   const handleBlur=(event)=>{
    handleChange(event);
    setError(validateForm(form));
   }

   /* Al darle "Crear Proyecto" activa esta funcion que llama a la funcion para enviar el proyecto*/
   const handSubmit=(event)=>{
    event.preventDefault();
    setError(validateForm(form));
    if(Object.keys(error).length===0){
      setLoading(true);
      const respuesta =postDatos(API,form);
      respuesta.then((res)=>{
        if(res.status===200){
          setLoading(false);
          setResponse(true);
          setTimeout(() => {
            setResponse(false);
          }, 6000);
        }
      });
    }
    else{
      return;
    }
   }

   return {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handSubmit
   }
}
  