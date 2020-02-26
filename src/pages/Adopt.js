import React from 'react';
import Animals from '../components/Animals';

class Adopt extends React.Component {
  
    state={
        animals:[
            {
                name:'Мейси',
                animal: 'котка',
                sex: 'женска',
                age: '1г',
                city: 'Пловдив',
                author: ' Наталия Иванова',
                phone: '0888456123',
                info: 'Котето е игриво и много възпитано'
            },
            {
                name:'Мейси',
                animal: 'котка',
                sex: 'женска',
                age: '1г',
                city: 'Пловдив',
                author: ' Наталия Иванова',
                phone: '0888456123',
                info: 'Котето е игриво и много възпитано'
            },
            {
                name:'Мейси',
                animal: 'котка',
                sex: 'женска',
                age: '1г',
                city: 'Пловдив',
                author: ' Наталия Иванова',
                phone: '0888456123',
                info: 'Котето е игриво и много възпитано'
            },
        ]
    }

    render() {
        
        return  <div >
               <Animals animals={this.state.animals}/>

            </div>

     
    }
}




export default Adopt;