/**
 * Function of validation for the data entered when creating or updating the profile of an animal
 * The last value must be either true when creating a new profil
 * OR false when updating a profile
 * And it only concerns the picture which is necessary when creating a profile but not when updating
 * @param {String} name Name of the animal
 * @param {Number} status Adoption status of the animal (Seeking for adoption/Adopted)
 * @param {Number} gender Gender of the animal (Male/Female)
 * @param {Number} species Species of the animal (Cat/Dog/NAC)
 * @param {Number} race Race of the animal
 * @param {Boolean} catCohabitation Possibility of cohabitation with cats
 * @param {Boolean} childCohabitation Possibility of cohabitation with children
 * @param {Boolean} dogCohabitation Possibility of cohabitation with dogs
 * @param {Boolean} nacCohabitation Possibility of cohabitation with NACs
 * @param {Boolean} unknownCohabitation If the possibility of cohabitation is not known
 *        or failed for other options
 * @param {String} description Description of the animal
 * @param {String} picture Picture of the animal, necessary when creating a new animal profile
 * @param {Boolean} animalPictureCreation Value when creating or updating a profile ;
 *        true when creating / false when updating
 * @returns A boolean as an answer of the validation with or without an array of all the errors
 */
export const validationAnimalCreation = (
  name,
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
  animalPictureCreation,
) => {
  let valid = true;
  const errors = {};

  const regName = new RegExp('^[A-Z][ \'-]?[a-zA-Zéèêàçëöïäùô \'-]*$');
  const regBio = new RegExp('^[a-zA-Z0-9éèêàçëöïäùô \':!?.;,"&/-]+$');

  if (!regName.test(name)) {
    errors.name = 'Veuillez renseigner un nom correct';
    valid = false;
  }

  if (!regBio.test(description)) {
    errors.description = 'Veuillez renseigner une description correcte';
    valid = false;
  }

  if (!(status !== '' && (status == 1 || status == 2))) {
    errors.status = 'Veuillez renseigner un statut d\'adoption correct';
    valid = false;
  }

  if (!(gender !== '' && (status == 1 || status == 2))) {
    errors.status = 'Veuillez renseigner un genre correct';
    valid = false;
  }

  if (picture === '' && animalPictureCreation) {
    errors.picture = 'Veuillez renseigner une photo avec un format correct';
    valid = false;
  }

  if (!(species !== '' && (status == 1 || status == 2 || status == 3))) {
    errors.species = 'Veuillez renseigner une espèce correcte';
    valid = false;
  }

  if (race === '') {
    errors.race = 'Veuillez renseigner une race correct';
    valid = false;
  }

  if (catCohabitation === '' && childCohabitation === '' && dogCohabitation === '' && nacCohabitation === '' && unknownCohabitation === '') {
    errors.cohabitation = 'Veuillez renseigner des champs d\'entente corrects';
    valid = false;
  }

  return valid ? { validate: true } : { validate: false, errors: errors };
};

export const validationCreationShelter = () => {

};
