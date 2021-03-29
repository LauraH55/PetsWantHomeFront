import slugify from 'slugify';

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

export const getDate = (date) => {
  const event = new Date(date);
  const today = new Date();
  const fullDate = (today - event.valueOf())/31536000000;
  return fullDate.toFixed();
};

export const getGender = (gender) => {
  let result
  if (gender == 1) {
    result = "Mâle";
  }
  else {
    result = "Femelle"
  }
  return result;  
};

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





