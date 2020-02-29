import {ADD_ANIMAL} from '../actions/actions.js';

const initialState ={
    animals:[]
};

function rootReducer (state=initialState, action) {
    switch(action.type){
        case ADD_ANIMAL:
            return{
                animals:[
                    ...state.animals,
                    {
                        name:action.name,
                        animal:action.animal,
                        sex:action.sex,
                        age:action.age,
                        city:action.city,
                        author:action.author,
                        phone:action.phone,
                        info:action.info

                    }
                ]
            };

            default:
                return state;
    };
}

export default rootReducer;