import slugify from 'slugify';

/**
 * Function to get the slug from a name.
 * @param {String} name The string to transform into slug
 * @returns {String} The string slugified
 */
export const slugifyName = (name) => {
  const slug = slugify(
    name,
    {
      lower: true,
    },
  );

  return slug;
};

/**
 * Get the animal having a given slug
 * @param {String} slug The slug to look for
 * @param {Array} animals The animals into which searching
 * @return {Object} The animal which has been found (or undefined)
 */
export const getAnimalBySlug = (slug, animals) => {
  const animal = animals.find((item) => {
    const currentAnimalSlug = slugifyName(item.name);
    return currentAnimalSlug === slug;
  });

  return animal;
};

/**
 * Function to get the number of years between a date and today
 * @param {String} date Selected date to compare to
 * @returns {String} Number of years between the selected date and today
 */
export const getDate = (date) => {
  const event = new Date(date);
  const today = new Date();
  const fullDate = (today - event.valueOf()) / 31536000000;
  return fullDate.toFixed();
};

/**
 * Function to get the birthdate readable for humans like DD/MM/YYYY
 * @param {String} date Selected date to formate
 * @returns {String} Date in a specific format
 */
export const getBirthdateDate = (date) => {
  const event = new Date(date);
  const month = event.getMonth() + 1 < 10 ? `0${event.getMonth() + 1}` : event.getMonth() + 1;
  const fullDate = `${event.getDate()}/${month}/${event.getFullYear()}`;
  return fullDate;
};

/**
 * Function to get the birthdate for input date like YYYY-MM-DD
 * @param {String} date Selected date formate
 * @returns {String} Date in a specific format
 */
export const getInfoBirthDate = (date) => {
  const event = new Date(date);

  const day = event.getDate() < 10 ? `0${event.getDate()}` : event.getDate();
  const month = event.getMonth() + 1 < 10 ? `0${event.getMonth() + 1}` : event.getMonth() + 1;

  const birdthdate = `${event.getFullYear()}-${month}-${day}`;

  return birdthdate;
};

//! PETITE QUESTION CONCERNANT LA POSSIBILITE D'AVOIR UN AUTRE NUMERO QUE 1 OU 2 ??
/**
 * Function to get the gender of the animal male/female
 * @param {Number} gender Number for the gender 1/2
 * @returns {String} The gender of the animal readable
 */
export const getGender = (gender) => {
  let result;
  if (gender == 1) {
    result = 'Mâle';
  }
  else {
    result = 'Femelle';
  }
  return result;
};

/**
 * Function to get the creation date of an animal's profile readable for humans
 * @param {String} date Date of the creation of the animal with the informatic date format
 * @returns {String} The date of the creation of the profile of the animal
 */
export const getCreationDate = (date) => {
  const event = new Date(date);

  const day = event.getDate() < 10 ? `0${event.getDate()}` : event.getDate();
  const month = event.getMonth() + 1 < 10 ? `0${event.getMonth() + 1}` : event.getMonth() + 1;

  const creationDate = `${day}/${month}/${event.getFullYear()}`;

  return creationDate;
};
