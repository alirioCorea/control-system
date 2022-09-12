import axios from "axios";

const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjMwMTQ4NDUsImV4cCI6MTY2MzAxODQ0NSwibmJmIjoxNjYzMDE0ODQ1LCJqdGkiOiJyb3RJS3pUUDB3RlNwcTNFIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.wwxSAX4tLG13LtYR5CRh0cvMoe0_cVfnw8K6LNUIapA";

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
    console.log(error.response.data);
    return [];
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
