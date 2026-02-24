export const hasImage = character =>
  character.image && character.image.trim() !== '';

export const inHouse = house => c => c.house === house;
