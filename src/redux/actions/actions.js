export const ADD_ANIMAL = 'ADD_ANIMAL';

export function addAnimal(name, animal,sex,age,city,author,phone,info) {
  return { type: ADD_ANIMAL,
    name:name,
    animal:animal,
    sex:sex,
    age:age,
    city:city,
    author:author,
    phone:phone,
    info:info
 };
}