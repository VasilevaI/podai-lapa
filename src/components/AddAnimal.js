import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

export class AddAnimal extends Component{
    state = {
        animal: {
            name: '',
            animal: '',
            sex: '',
            age: '',
            city: '',
            author: '',
            phone: '',
            info: ''
        }
      };

      onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
       // this.props.addAnimal(this.state.name, this.state.animal,this.state.sex, this.state.age,
       //   this.state.city, this.state.author, this.state.phone, this.state.info);
       //   this.setState({
       //    name: '' ,
       //    animal: '',
       //    sex: '',
       //    age: '',
       //    city: '',
       //    author: '',
       //    phone: '',
       //    info: ''
       //  });
      }

    // onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render(){
        return(
            <form onSubmit={this.onSubmit} style={formStyle}>
                 <input 
                type="text"
                name="name"
                placeholder=" име на животното ..."
                value={this.state.name}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>

                <input 
                type="text"
                name="animal"
                placeholder=" котка или куче ..."
                value={this.state.animal}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="sex"
                placeholder="Въведете пол ..."
                value={this.state.sex}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="age"
                placeholder="Години на животното ..."
                value={this.state.age}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="city"
                placeholder="населено място ..."
                value={this.state.city}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="author"
                placeholder="Име за контакт ..."
                value={this.state.author}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="phone"
                placeholder="Телефон за връзка ..."
                value={this.state.phone}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="textarea"
                name="info"
                placeholder="информация  ..."
                value={this.state.info}
                onChange={this.onChange}
                style={inputStyle}
                />
               <br/>
               <input 
               type="submit" 
               value="Добави" 
               className="btn"
               style={btnStyle}
               />

                
            </form>
        )
    }
}

const formStyle={
  margin: '10px',
  padding: '10px',
}

const inputStyle={
  marginBottom: '5px'
}

const btnStyle={
  background: '#2196F3',
  padding: '1px',
  borderRadius: '3px',
  
}


const mapStateToProps = state => {
    return {
        animals: state.animals,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        addAnimal: actions.addAnimal,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(AddAnimal);