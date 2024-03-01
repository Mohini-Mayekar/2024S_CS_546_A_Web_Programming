/*Here, you can export the data functions
to get the comapnies, people, getCompanyByID, getPersonById.  You will import these functions into your routing files and call the relevant function depending on the route. 
*/

import axios from "axios";
import { url_companies, url_people, err_handler_data } from '../helpers.js';

const getCompanies = async () => {
    return await getCompaniesData(false);
};

const getCompaniesData = async (isById) => {
    try {
        const companiesData = await axios.get(url_companies);
        return companiesData.data;
    } catch (e) {
        err_handler_data('Company', e, isById);
    }
};

const getPeople = async () => {
    return await getPeopleData(false);
};

const getPeopleData = async (isById) => {
    try {
        const peopleData = await axios.get(url_people);
        return peopleData.data;
    } catch (e) {
        err_handler_data('Person', e, isById);
    }
};

const getCompanyById = async (id) => {
    let companiesData = new Array;
    companiesData = await getCompaniesData(true);
    let companyById = fetchResourceById(id, companiesData);
    if (companyById === undefined) throw `Company Not Found!`;
    return companyById;
};

const getPersonById = async (id) => {
    let peopleData = new Array;
    peopleData = await getPeopleData(true);
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
