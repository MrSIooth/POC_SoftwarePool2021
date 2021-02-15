function helloWorld() {
  console.log('Hello World!');
}

import { Country, Mission, Cosmonaut } from './types';

const axios = require('axios').default;

function get_cosmonaut(tab : Array<any>, mission : Mission, country : Country) {
  let array = [];
  tab.forEach(function (element) {
    if (element.mission === mission && element.country === country){
      array.push(element);
    }
  });
  return array;
}

async function selectCosmonaut(mission : Mission, country : Country) {
  let array = [];
  axios
    .get('http://localhost:7600/cosmo/')
    .then(function todo(resp) {
      array = get_cosmonaut(resp.data, mission, country);
      console.log(array);
    })
    .catch(function (error) {console.log(error)});
  return (array);
}
let array = selectCosmonaut(Mission.ISS, Country.FR);
console.log(array);