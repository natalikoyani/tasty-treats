import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const EVENTS = 'https://tasty-treats-backend.p.goit.global/api/events';
const CATEGORIES = 'https://tasty-treats-backend.p.goit.global/api/categories';	
const POPULAR = 'https://tasty-treats-backend.p.goit.global/api/recipes/popular';	
const INGREDIENTS = 'https://tasty-treats-backend.p.goit.global/api/ingredients';	
const AREAS = 'https://tasty-treats-backend.p.goit.global/api/areas';	
const RECIPES = 'https://tasty-treats-backend.p.goit.global/api/recipes';

// orders patch api for update
//const ORDERS = 'https://tasty-treats-backend.p.goit.global/api/orders';

export { getEvents, getAreas, getCategories, getIngredients, getPopularRecipes, getRecipeById, getRecipes };

async function getEvents() {
    try {
        const response = await axios(EVENTS);
        if (!response.data) throw new Error(response.status);
        return response.data;
    } catch (error) {
        Notify('Oops! Something went wrong! Try again later');
    }
}

async function getAreas() {
    try {
        const response = await axios(AREAS);
        if (!response.data) throw new Error(response.status);
        return response.data;
    } catch (error) {
        Notify('Oops! Something went wrong! Try again later');
    }
}

async function getCategories() {
    try {
        const response = await axios(CATEGORIES);
        if (!response.data) throw new Error(response.status);
        return response.data;
    } catch (error) {
        Notify('Oops! Something went wrong! Try again later');
    }
}

async function getIngredients() {
    try {
        const response = await axios(INGREDIENTS);
        if (!response.data) throw new Error(response.status);
        return response.data;
    } catch (error) {
        Notify('Oops! Something went wrong! Try again later');
    }
}

async function getPopularRecipes() {
    try {
        const response = await axios(POPULAR);
        if (!response.data) throw new Error(response.status);
        return response.data;
    } catch (error) {
        Notify('Oops! Something went wrong! Try again later');
    }
}

async function getRecipeById(id) {
    try {
        const response = await axios(`${RECIPES}/${id}`);
        if (!response.data) throw new Error(response.status);
        return response.data;
    } catch (error) {
        Notify('Oops! Something went wrong! Try again later');
    }
}

async function getRecipes({ title, category, area, ingredient, time, page, limit }) {
    
    const search = { title, category, area, ingredient, time, page, limit };

    for (let key in search) {
        if (search[key] === undefined) delete search[key];
    }

    const params = new URLSearchParams(search);
    
    try {
        const response = await axios({
            baseURL: RECIPES,
            url: Object.keys(search).length === 0 ? undefined : `?${params.toString()}`,
        });

        if (!response.data) throw new Error(response.status);
        return response.data;

    } catch (error) {
        Notify('Oops! Something went wrong! Try again later');
    }
}
