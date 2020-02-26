import React, { Component } from 'react';

export class AddAnimal extends Component{
    state = {
        name: '',
        animal: '',
        sex: '',
        age: '',
        city: '',
        author: '',
        phone: '',
        info: ''
      }

      onSubmit = (e) => {
        e.preventDefault();
        this.props.addAnimal(this.state.name);
        this.setState({ name: '' });
      }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render(){
        return(
            <form onSubmit={this.onSubmit} >
                 <input 
                type="text"
                name="name"
                placeholder="Въведете име на животното ..."
                value={this.state.name}
                onChange={this.onChange}
                />
            

                <input 
                type="text"
                name="animal"
                placeholder="Въведете котка или куче ..."
                value={this.state.animal}
                onChange={this.onChange}
                />

                <input 
                type="text"
                name="sex"
                placeholder="Въведете пол ..."
                value={this.state.sex}
                onChange={this.onChange}
                />

                <input 
                type="text"
                name="age"
                placeholder="Години на животното"
                value={this.state.age}
                onChange={this.onChange}
                />

                <input 
                type="text"
                name="city"
                placeholder="Въведете населено място ..."
                value={this.state.city}
                onChange={this.onChange}
                />

                <input 
                type="text"
                name="author"
                placeholder="Име за контакт ..."
                value={this.state.author}
                onChange={this.onChange}
                />

                <input 
                type="text"
                name="phone"
                placeholder="Телефон за връзка ..."
                value={this.state.phone}
                onChange={this.onChange}
                />

                <input 
                type="textarea"
                name="info"
                placeholder="Допълнителна информация  ..."
                value={this.state.info}
                onChange={this.onChange}
                />

               <input 
               type="submit" 
               value="Добави" 
               className="btn"
               />

                
            </form>
        )
    }
}

export default AddAnimal