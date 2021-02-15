import { Country, Mission, Cosmonaut } from './types';
import { createCosmonaut } from './createCosmonaut';

function getCosmonaut(path : string) {
  const file = require(path);
  return createCosmonaut(file.name, file.mission, file.country);
}

getCosmonaut('./cosmonaut.json');
