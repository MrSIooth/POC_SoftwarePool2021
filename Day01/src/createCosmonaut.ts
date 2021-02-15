import { Country, Mission, Cosmonaut } from './types';

function createCosmonaut(name : string, mission : Mission, country : Country) : Cosmonaut {
  const newPerson : Cosmonaut = { name, mission, country };
  return (newPerson);
}
