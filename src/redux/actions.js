import types from './action-types';
import graphQLService from '../network/graphql-service';

export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export const getAnimals = (responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.getAnimals(responseFields);
        dispatch(setAnimals(response.data.animals));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};


export function setAnimals (animals) {
    return {type: types.SET_ANIMALS, payload: animals}
}

export function addAnimalToStore(animal){
    return {type: types.ADD_ANIMAL, payload: animal};
}

export const addAnimal = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.addAnimal(variables, responseFields);
        dispatch(addAnimalToStore(response.data.addAnimal));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const getCurrentUser = () => async dispatch => {
    try {
        const response = await graphQLService.currentUser();
        dispatch(saveCurrentUser(response.data.currentUser));
        dispatch(setUserLoaded())
    } catch(e){
        dispatch(saveToken(''));
        dispatch(setUserLoaded())
    }
}

export function saveCurrentUser(user){
    return {type: types.SET_USER, payload: user}
}

export function setUserLoaded(){
    return {type: types.SET_USER_LOADED, payload: true}
}

export function saveToken(token){
    return {type: types.SAVE_TOKEN, payload: token}
}

export const addUser = variables => async dispatch => {
    try {
        const response = await graphQLService.addUser(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.addUser));
    } catch(e){
        e.graphQLErrors.forEach(error => {
            console.log(error)
        })
        dispatch(setGraphQLError({request: "addUser", errors: []}))
    }
}


export const editUser = (variables, responseFields = "_id firstName lastName email userType games {name}") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(getCurrentUser());
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "editUser", errors: []}))
    }
}

export const login = variables => async dispatch => {
    try {
        const response = await graphQLService.login(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.login));
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "login", errors: []}))
    }
}

export const logout = variables => async dispatch => {
    dispatch(saveToken(''));
    dispatch(setUserLoaded());
    dispatch(saveCurrentUser({}));
    localStorage.clear();
}

export function setGraphQLError (error) {
    return { type: types.ADD_GRAPHQL_ERROR, payload: error };
}

export const deleteAnimal = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteAnimal(variables, responseFields);
        dispatch(deleteAnimalFromStore(response.data.deleteAnimal._id));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function deleteAnimalFromStore (animal) {
    return {type: types.DELETE_ANIMAL, payload: animal}
}