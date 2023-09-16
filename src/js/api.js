import axios from "axios";

const events = 'https://tasty-treats-backend.p.goit.global/api/events'	
const categories = 'https://tasty-treats-backend.p.goit.global/api/categories' 	
const popular = 'https://tasty-treats-backend.p.goit.global/api/recipes/popular' 	
const ingredients = 'https://tasty-treats-backend.p.goit.global/api/ingredients' 	
const areas = 'https://tasty-treats-backend.p.goit.global/api/areas' 	
const recipes = 'https://tasty-treats-backend.p.goit.global/api/recipes'

// orders patch api for update
//const orders = 'https://tasty-treats-backend.p.goit.global/api/orders' 	

export const getEvents = async () => {
    return axios({
        method: 'get',
        baseURL: events,
    })
    .then((response) => {
        if (!response.data) return new Error(response.status);
        return response.data;
    })
        .catch(error => console.log(error))
}

export const getAreas = () => {
    return axios({
        method: 'get',
        baseURL: areas,
    })
    .then((response) => {
        if (!response.data) return new Error(response.status);
        return response.data;
    })
    .catch(error => console.log(error))
}

export const getCategories = () => {
    return axios({
        method: 'get',
        baseURL: categories,
    })
    .then((response) => {
        if (!response.data) return new Error(response.status);
        return response.data;
    })
    .catch(error => console.log(error))
}

export const getIngredients = () => {
    return axios({
        method: 'get',
        baseURL: ingredients,
    })
    .then((response) => {
        if (!response.data) return new Error(response.status);
        return response.data;
    })
    .catch(error => console.log(error))
}

export const getPopularRecipes = () => {
    return axios({
        method: 'get',
        baseURL: popular,
    })
    .then((response) => {
        if (!response.data) return new Error(response.status);
        return response.data;
    })
    .catch(error => console.log(error))
}

export const getRecipeById = (id) => {
    return axios({
        method: 'get',
        baseURL: `${recipes}/${id}`,
    })
    .then((response) => {
        if (!response.data) return new Error(response.status);
        return response.data;
    })
    .catch(error => console.log(error))
}

export const getRecipes = ({ title, category, area, ingredient, time, page, limit }) => {

    const search = { title, category, area, ingredient, time, page, limit }

    for (let key in search) {
        if (search[key] === undefined) delete search[key];
    }
    const params = new URLSearchParams(search);
        
    return axios({
        method: 'get',
        baseURL: recipes,
        url: Object.keys(search).length === 0 ? undefined : `?${params.toString()}`
    })
    .then((response) => {
        if (!response.data) return new Error(response.status);
        return response.data;
    })
    .catch(error => console.log(error))
}


// module.exports = {
//     getEvents, 
//     getAreas,
//     getCategories,
//     getIngredients,
//     getPopularRecipes,
//     getRecipes,
// }