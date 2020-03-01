import types from './action-types';

export function addAnimal(animal){
    return {type: types.ADD_ANIMAL, payload: animal};
}