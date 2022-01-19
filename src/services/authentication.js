//Récupère une instance du client HTTP Axios
import  http   from '../helpers/http';

const login = (userCredentials) => {
  return http.post('/login', JSON.stringify(userCredentials))
    .then(response => {
      console.log("response.data");
      console.log(response.data);
    return  response.data
    })
    .catch(error => console.log(error));
}

export const authenticationService = {
  login
}