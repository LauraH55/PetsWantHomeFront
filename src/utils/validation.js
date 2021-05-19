/**
 * 
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
) => {
  let valid = true;
  const errors = [];

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

  if (picture === '') {
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
