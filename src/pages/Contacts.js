import React from 'react';
import AddAnimal from '../components/AddAnimal';


class Contacts extends React.Component {

    addAnimal=(name)=>{
       const newAnimal={
           name:name,
       }
       this.setState({animals:[...this.state.animals, newAnimal]});
    }
    render() {
        return (
        <div>
         <AddAnimal addAnimal={this.addAnimal}/>
        </div>
        );
    }
}


export default Contacts;