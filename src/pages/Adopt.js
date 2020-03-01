import React from 'react';
import Animals from '../components/Animals';


class Adopt extends React.Component {
  
    state={
        animals:[
            {
                name:'Мейси',
                kind: 'котка',
                sex: 'женски',
                age: '1г',
                city: 'Пловдив',
                author: ' Наталия Иванова',
                phone: '0888456123',
                info: 'Котето е игриво и много възпитано'
            },
            {
                name:'Ариа',
                kind: 'котка',
                sex: 'женски',
                age: '2г',
                city: 'Пловдив',
                author: ' Иван Иванов',
                phone: '0888123456',
                info: 'Котето е игриво, много възпитано, разбира се с деца'
            },
            {
                name:'Меги',
                kind: 'котка',
                sex: 'женски',
                age: '3м',
                city: 'Пловдив',
                author: ' Мария Иванова',
                phone: '0888485123',
                info: 'Котето е много възпитано'
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