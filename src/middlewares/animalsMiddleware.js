import axios from 'axios';

import {
  FETCH_ANIMALS,
  saveAnimals,
  FETCH_RANDOM_ANIMALS,
  saveRandomAnimals,
  FETCH_RACES,
  saveRaces,
  ANIMAL_UPDATED,
  saveUpdateAnimal,
  updateAnimalImage,
  UPDATE_ANIMAL_IMAGE,
  animalUpdateError,
  updateAnimal,
  SET_ARCHIVE_ANIMAL,
  ANIMAL_CREATION,
  animalCreated,
} from 'src/actions/animals';

import {
  loader,
} from 'src/actions/auth';

import {
  validationAnimalCreation,
} from 'src/utils/validation';

const URL = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public/api';
const URLBIS = 'http://54.172.199.205/apotheose/apo-PetsWantHome-back/public';

const animalsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * Request to get the animals list to display
     */
    case FETCH_ANIMALS:
      store.dispatch(loader());
      axios.get(`${URL}/animals`)
        .then((response) => {
          console.log('response: ', response);
          store.dispatch(saveAnimals(response.data));
        })
        .catch((error) => {
          console.log('FETCH ANIMALS ERROR :', error);
        });
      next(action);
      break;

    /**
     * Request to get random animals to display on the home page
     */
    case FETCH_RANDOM_ANIMALS:
      store.dispatch(loader());
      axios.get(`${URL}/home`)
        .then((response) => {
          // console.log('response: ', response);
          store.dispatch(saveRandomAnimals(response.data));
        })
        .catch((error) => {
          console.log('FETCH RANDOM ANIMALS ERROR : ', error);
        });
      next(action);
      break;

    /**
     * Request to get all the animal races
     */
    case FETCH_RACES:
      store.dispatch(loader());
      axios.get(`${URL}/races`)
        .then((response) => {
          console.log('response: ', response.data);
          store.dispatch(saveRaces(response.data));
        })
        .catch((error) => {
          console.log('FETCH ANIMALS RACES ERROR : ', error);
        });
      next(action);
      break;

    /**
     * Request to update the new informations of an animal
     */
    case ANIMAL_UPDATED: {
      const {
        id,
        name,
        birthdate,
        status,
        gender,
        species,
        race,
        catCohabitation,
        childCohabitation,
        dogCohabitation,
        nacCohabitation,
        unknownCohabitation,
        description,
        picture,
        actualPicture,
      } = store.getState().animals;

      const statusNumber = parseInt(status, 10);
      const genderNumber = parseInt(gender, 10);
      const raceNumber = parseInt(race, 10);

      const data = {
        name,
        birthdate,
        status: statusNumber,
        gender: genderNumber,
        race: raceNumber,
        species,
        catCohabitation,
        childCohabitation,
        dogCohabitation,
        nacCohabitation,
        unknownCohabitation,
        description,
      };

      axios({
        method: 'patch',
        url: `${URL}/animal/${id}/update`,
        data,
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((response) => {
          console.log(response);
          if (picture === actualPicture) {
            store.dispatch(saveUpdateAnimal());
            axios({
              method: 'get',
              url: `${URL}/animal/${id}`,
              headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
            })
              .then((responseBis) => {
                store.dispatch(updateAnimal(responseBis.data));
              })
              .catch();
          }
          else {
            store.dispatch(updateAnimalImage());
          }
        })
        .catch((error) => {
          console.log('ANIMAL UPDATE ERROR', error);
          store.dispatch(animalUpdateError());
        });
      next(action);
      break;
    }

    /**
     * Request to update the picture of the animal
     */
    case UPDATE_ANIMAL_IMAGE: {
      const {
        id,
        picture,
      } = store.getState().animals;

      const bodyFormData = new FormData();
      bodyFormData.append('picture', picture);

      axios({
        method: 'post',
        url: `${URL}/animal/${id}/update/image`,
        data: bodyFormData,
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((response) => {
          store.dispatch(saveUpdateAnimal());
          axios({
            method: 'get',
            url: `${URL}/animal/${id}`,
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
          })
            .then((responseBis) => {
              store.dispatch(updateAnimal(responseBis.data));
            })
            .catch();
        })
        .catch((error) => {
          console.log('ANIMAL PICTURE UPDATE ERROR : ', error);
          store.dispatch(animalUpdateError());
        });
      next(action);
      break;
    }

    /**
     * Request to archive or desarchive an animal
     */
    case SET_ARCHIVE_ANIMAL: {
      const data = { status: action.status };

      axios({
        method: 'post',
        url: `${URL}/animal/${action.id}/archive`,
        data,
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((response) => {
          console.log(response);
          document.location.reload();
        })
        .catch((error) => {
          console.log('ANIMAL DES/ARCHIVE ERROR', error);
        });
      next(action);
      break;
    }

    /**
     * Request to create the profile of a new animal
     */
    case ANIMAL_CREATION: {
      const {
        birthdate,
        status,
        gender,
        species,
        picture,
      } = store.getState().animals;

      const name = store.getState().animals.name.trim();
      const animalName = name.slice(0, 1);
      const animalNameCapitalized = name.replace(animalName, animalName.toUpperCase());

      const description = store.getState().animals.description.trim();
      const animalDescription = description.slice(0, 1);
      const animalDescriptionCapitalized = description.replace(animalDescription, animalDescription.toUpperCase());

      const animalRace = store.getState().animals.race === '' ? 0 : store.getState().animals.race;
      const animalCatCohabitation = store.getState().animals.catCohabitation !== '';
      const animalChildCohabitation = store.getState().animals.childCohabitation !== '';
      const animalDogCohabitation = store.getState().animals.dogCohabitation !== '';
      const animalNacCohabitation = store.getState().animals.nacCohabitation !== '';
      const animalUnknownCohabitation = store.getState().animals.unknownCohabitation !== '';

      const validation = validationAnimalCreation(
        animalNameCapitalized,
        status,
        gender,
        species,
        animalRace,
        animalCatCohabitation,
        animalChildCohabitation,
        animalDogCohabitation,
        animalNacCohabitation,
        animalUnknownCohabitation,
        animalDescriptionCapitalized,
        picture,
      );

      console.log(validation);

      const statusNumber = parseInt(status, 10);
      const raceNumber = parseInt(animalRace, 10);
      const genderNumber = parseInt(gender, 10);

      const bodyFormData = new FormData();
      bodyFormData.append('name', animalName);
      bodyFormData.append('birthdate', birthdate);
      bodyFormData.append('status', statusNumber);
      bodyFormData.append('gender', genderNumber);
      bodyFormData.append('race_id', raceNumber);
      bodyFormData.append('species_id', species);
      bodyFormData.append('cat_cohabitation', animalCatCohabitation);
      bodyFormData.append('child_cohabitation', animalChildCohabitation);
      bodyFormData.append('dog_cohabitation', animalDogCohabitation);
      bodyFormData.append('nac_cohabitation', animalNacCohabitation);
      bodyFormData.append('unknown_cohabitation', animalUnknownCohabitation);
      bodyFormData.append('description', animalDescription);
      bodyFormData.append('picture', picture);

      

      // axios({
      //   method: 'post',
      //   url: `${URL}/animal/create`,
      //   data: bodyFormData,
      //   headers: { 'Content-Type': 'multipart/form-data', authorization: `Bearer ${localStorage.getItem('token')}` },
      // })
      //   .then((response) => {
      //     console.log(response);
      //     store.dispatch(saveUpdateAnimal());
      //   })
      //   .catch((error) => {
      //     console.log('ANIMAL CREATION ERROR', error);
      //     store.dispatch(animalUpdateError());
      //   });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default animalsMiddleware;
