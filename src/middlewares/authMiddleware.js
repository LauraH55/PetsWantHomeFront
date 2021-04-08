import axios from 'axios';
import jwt_decode from "jwt-decode";


import { LOG_IN, LOG_OUT, NEW_SHELTER_CREATION, NEW_USER, saveUser, loginError, emailError, passwordError, logOut, logIn } from 'src/actions/auth';
import { loader } from 'src/actions/animals';

const API_URL = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api';
const myurl = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api/shelter/create';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().auth;
      
      axios.post(`${API_URL}/login`, {
        username: email,
        password: password,
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          store.dispatch(saveUser(response.data.logged, response.data.token));

          const decoded = jwt_decode(response.data.token);
          console.log(decoded.shelter_id);

          if (decoded.shelter_id !== undefined) {
            localStorage.setItem('shelterID', decoded.shelter_id);
            window.location = '/';
            store.dispatch(loader());  
          } 
          else {
            window.location = '/';
          }


        })
        .catch((error) => {
          console.log(error);
          store.dispatch(loginError());
        });

      next(action);
      break;
    }

  
    case NEW_SHELTER_CREATION:{
      const {
        email,
        name,
        address,
        phone_number,
        picture,
      } = store.getState().shelter;

      const bodyFormData = new FormData();
      bodyFormData.append('email', email);
      bodyFormData.append('name', name);
      bodyFormData.append('address', address);
      bodyFormData.append('phone_number', phone_number);
      bodyFormData.append('picture', picture);


      
      // axios.post(myurl,
      //   {
      //     email,
      //     name,
      //     address,
      //     phoneNumber: phone_number,
      //     picture,
      //   },
      //   {
      //     headers : {
      //       'Content-type': "multipart/form-data",
      //       Authorization: `Bearer ${localStorage.getItem('token')}`,
      //     },
      // })
      
      axios({
        method: "post",
        url: myurl,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data", authorization: `Bearer ${localStorage.getItem('token')}`},
      })
        .then((response) => {
          console.log(response);
          localStorage.setItem('shelterID', response.data.shelter.id);
          // store.dispatch(logOut());
          // store.dispatch(logIn());
          window.location = '/';
        })
        .catch((error) => {
          console.log(error);
        });
      

      next(action);
      break;
    }

    case NEW_USER:{
      const {
        email,
        password,
        confirmPassword,
      } = store.getState().register;

      const newUser = {
        email,
        password,
      };

      if (password === confirmPassword) {
        axios.post(`${API_URL}/register`, newUser)
          .then((response) => {
            console.log(response);
            // window.location = '/login';
            store.dispatch(logIn());
          })
          .catch((error) => {
            console.log(error.response.status);
            if (error.response.status == 500) {
              return (store.dispatch(emailError()));
            }
            else {
              store.dispatch(passwordError());
            }
          });
      }
      else {
        console.log('Les mots de passe saisis ne sont pas identiques !');
        store.dispatch(passwordError());
      }

      next(action);
      break;
    }

    case LOG_OUT:
      window.location = '/';
      localStorage.clear();
      next(action);
      break;

    default:
      next(action);
  }
};

export default authMiddleware;
