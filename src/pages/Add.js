import React from 'react';
import AddAnimal from '../components/AddAnimal';


class Add extends React.Component {

    // addAnimal=(name, animal,sex,age,city,author,phone,info)=>{
    //    const newAnimal={
    //        name:name,
    //        animal:animal,
    //        sex:sex,
    //        age:age,
    //        city:city,
    //        author:author,
    //        phone:phone,
    //        info:info
    //    }
    //    this.setState({animals:[...this.state.animals, newAnimal]});
    // }
    render() {
        return (
        <div>
         <AddAnimal addAnimal={this.addAnimal}/>
        </div>
        );
    }
}


export default Add;