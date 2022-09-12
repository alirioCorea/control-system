import axios from "axios";

const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjMwMDA2NzAsImV4cCI6MTY2MzAwNDI3MCwibmJmIjoxNjYzMDAwNjcwLCJqdGkiOiJWcHdDaVF3RnR4eTdNR0F4Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.WQEPRpEvPNnhw-7cbR0cIxDZBLxb0GQkW1YtCw3d8S8";

export const getDatos = async (API) => {
  try{
    const respuesta = await axios.get(API, {
        headers: {
          "Content-type": "application/json",
          authorization: `bearer ${token}`,
        },
      });

      return respuesta.data;
  }
  catch(error){
    console.log(error.response.data.message);
  }
}

export const postDatos = async (API,form) => {
  try{
    const respuesta = await axios.post(
      API,
      JSON.stringify(form),
      {
        headers: {
          "Content-type": "application/json",
          authorization: `bearer ${token}`,
        }
      }
    );
    return respuesta;
  }
  catch(error){ 
    console.log(error.response.data.message);
  }
}
