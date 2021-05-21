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
 * @param {Boolean} animalCreation Value when creating or updating a profile ;
 *        true when creating / false when updating
 * @returns A boolean as an answer of the validation with or without an array of all the errors
 */
export const validationAnimal = (
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
  animalCreation,
) => {
  let valid = true;
  const errors = {};

  const regName = new RegExp('^[A-Z][ \'-]?[a-zA-Zéèêàçëöïäùô \'-]*$');
  const regBio = new RegExp('^[a-zA-Z0-9éèêàçëöïäùô \':!?.;,"&-]+$');

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
    errors.gender = 'Veuillez renseigner un genre correct';
    valid = false;
  }

  if (picture === '' && animalCreation) {
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

/**
 * Function of validation for the data entered when creating or updating a shelter
 * The last value must be either true when creating a new shelter
 * OR false when updating a shelter
 * And it only concerns the picture which is necessary when creating a shelter but not when updating
 * @param {String} name Name of the shelter
 * @param {String} address Address of the shelter
 * @param {String} zip Zip code of the shelter
 * @param {String} city City of the shelter
 * @param {String} phoneNumber Phone number of the shelter
 * @param {String} email Email address of the shelter
 * @param {String} picture Picture of the shelter
 * @param {Boolean} shelterCreation Value when creating or updating a shelter for the picture
 * @returns A boolean as an answer of the validation with or without an array of all the errors
 */
export const validationShelter = (
  name,
  address,
  zip,
  city,
  phoneNumber,
  email,
  picture,
  shelterCreation,
) => {
  let valid = true;
  const errors = {};

  const regName = new RegExp('^[a-zA-Z0-9éèêàçëöïäùô \'.-]+$');
  const regZip = new RegExp('^[0-9]{5}$');
  const regCity = new RegExp('^[A-Z][ \'-]?[a-zA-Zéèêàçëöïäùô \'-]*$');
  const regPhone = new RegExp('^0[0-9]{9}$');
  const regMail = new RegExp('^[a-zA-Z0-9.-]+@[a-z]{1,}.[a-z]{1,}$');

  if (!regName.test(name)) {
    valid = false;
    errors.name = 'Veuillez renseigner un nom avec un format correct';
  }

  if (!regName.test(address)) {
    valid = false;
    errors.address = 'Veuillez renseigner une adresse avec un format correct';
  }

  if (!regZip.test(zip)) {
    valid = false;
    errors.zip = 'Veuillez renseigner un code postal avec format correct';
  }

  if (!regCity.test(city)) {
    valid = false;
    errors.city = 'Veuillez renseigner un nom de ville avec un format correct';
  }

  if (!regPhone.test(phoneNumber)) {
    valid = false;
    errors.phoneNumber = 'Veuillez renseigner un numéro de téléphone au bon format';
  }

  if (!regMail.test(email)) {
    valid = false;
    errors.email = 'Veuillez renseigner un email avec un format correct';
  }

  if (picture === '' && shelterCreation) {
    valid = false;
    errors.picture = 'Veuillez renseigner une photo avec un format correct';
  }

  return valid ? { validate: true } : { validate: false, errors: errors };
};

/**
 * Validation for the form of registration for a new user
 * @param {String} email Email address of the new user
 * @param {String} password Password of the new user
 * @param {String} confirmPassword Confirmation password for the new user
 * @returns A boolean as an answer of the validation with or without the number of the error message
 *        If returns 2 : Invalid email
 *        If returns 3 : Invalid password
 *        If returns 4 : Invalid email & password
 */
export const validationUser = (
  email,
  password,
  confirmPassword,
) => {
  let valid = true;
  let errors = 0;

  const regMail = new RegExp('^[a-zA-Z0-9.-]+@[a-z]{1,}.[a-z]{1,}$');
  const regPassword = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[-+!*$@%_])([-+!*$@%\\w]{8,15})$');

  if (!regMail.test(email)) {
    valid = false;
    errors += 2;
  }

  if (!regPassword.test(password)) {
    valid = false;
    errors += 3;
  }

  if (password !== confirmPassword) {
    valid = false;
    errors += 4;
  }

  if (errors === 3 || errors === 4 || errors === 7) {
    errors = 3;
  }
  else if (errors === 5 || errors === 6 || errors === 9) {
    errors = 4;
  }

  return valid ? { validate: true } : { validate: false, errors: errors };
};

/**
 * Validation for the password whether it's new or updating
 * @param {String} password Password of the user
 * @param {String} passwordConfirm Password confirmation of the user
 * @returns A boolean as an answer of the validation with or without an array of all the errors
 */
export const validationPassword = (
  password,
  passwordConfirm,
) => {
  let valid = true;
  const errors = {};

  const regPassword = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[-+!*$@%_])([-+!*$@%\\w]{8,15})$');

  if (!regPassword.test(password)) {
    valid = false;
    errors.password = 'Le format du mot de passe n\'est pas correct';
  }

  if (!regPassword.test(passwordConfirm)) {
    valid = false;
    errors.password = 'Le format du mot de passe n\'est pas correct';
  }

  if (password !== passwordConfirm) {
    valid = false;
    errors.password = 'La confirmation du mot de passe ne correspond pas';
  }

  return valid ? { validate: true } : { validate: false, errors: errors };
};
