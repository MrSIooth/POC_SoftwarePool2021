import { Country, Mission, Cosmonaut } from './types';

export function createCosmonaut(name : string, mission : Mission, country : Country) : Cosmonaut {
  const newPerson : Cosmonaut = { name, mission, country };
  return (newPerson);
}
