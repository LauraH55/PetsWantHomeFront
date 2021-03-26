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
