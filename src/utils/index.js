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
  const fullDate = (today - event.valueOf())/31536000000;
  return fullDate.toFixed();
};

//! PETITE QUESTION CONCERNANT LA POSSIBILITE D'AVOIR UN AUTRE NUMERO QUE 1 OU 2 ??
/**
 * Function to get the gender of the animal male/female
 * @param {Number} gender Number for the gender 1/2
 * @returns {String} The gender of the animal readable
 */
export const getGender = (gender) => {
  let result
  console.log(gender);
  if (gender == 1) {
    result = "Mâle";
  }
  else {
    result = "Femelle"
  }
  return result;  
};

/**
 * Function to get the degree of cohabitation the animal has
 * @param {Number} cohabitation Number indicates the degree of cohabitation
 *        if not 1-4 then it's not indicated 
 * @returns {String} The level of cohabitation
 */
export const getCohabitation = (cohabitation) => {
  let result
  if (cohabitation == 1) {
    result = "Enfants";
  }
  else if(cohabitation == 2) {
    result = "Chats"
  }
  else if(cohabitation == 3) {
    result = "Chiens"
  }
  else if(cohabitation == 4) {
    result = "Tous"
  }
  else {
    result = "Non précisé"
  }
  return result;  
};





