import types from './action-types';

export function addAnimal(movie){
    return {type: types.ADD_ANIMAL, payload: movie};
}