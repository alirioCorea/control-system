import axios from "axios";

const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjMxODY2MTMsImV4cCI6MTY2MzI3MzAxMywibmJmIjoxNjYzMTg2NjEzLCJqdGkiOiJhOUQ3SUtSOGI3ZFc5R21rIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.k5cjNLO4ZdMw2D82BtOGgSnVqUJ87QyCP5yqAHGFvaw";

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
    console.log(error.response.data);
  }
}
