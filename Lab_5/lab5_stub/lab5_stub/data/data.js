/*Here, you can export the data functions
to get the comapnies, people, getCompanyByID, getPersonById.  You will import these functions into your routing files and call the relevant function depending on the route. 
*/

import axios from "axios";
import { url_companies, url_people, checkisValidId } from '../helpers.js';

const getCompanies = async () => {
    const companiesData = await axios.get(url_companies);
    return companiesData.data;
};

const getPeople = async () => {
    const peopleData = await axios.get(url_people);
    return peopleData.data;
};

const getCompanyById = async (id) => {
    //id = checkisValidId(id, 'companyId');
    let companiesData = new Array;
    companiesData = await getCompanies();
    let companyById = fetchResourceById(id, companiesData);
    if (companyById === undefined) throw `Company Not Found!`;
    return companyById;
};

const getPersonById = async (id) => {
    //id = checkisValidId(id, 'personId');
    let peopleData = new Array;
    peopleData = await getPeople();
    let personById = fetchResourceById(id, peopleData);
    if (personById === undefined) throw `Person Not Found!`;
    return personById;
};

let fetchResourceById = (id, data) => {
    let resourceById = data.find((ele) => {
        return ele['id'] === id;
    });
    return resourceById;
};

export {
    getCompanies, getPeople, getCompanyById, getPersonById
}
