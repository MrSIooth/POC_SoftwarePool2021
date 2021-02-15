import { Country, Mission, Cosmonaut } from './types';

const axios = require('axios').default;

function selectCosmonaut(mission : Mission, country : Country)
{
    axios({
        method: 'get',
        url: 'http://localhost:7600/cosmo/'
    }).then(function(resp){console.log(resp)})
    .catch(function (error) {console.log(error)};
})
}