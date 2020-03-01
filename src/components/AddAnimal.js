import React, {Component} from "react";

 class AddAnimal extends Component{
  static defaultProps = {
    onAnimalAdd: () => null
  };

    state = {
        animal: {
            name: '',
            kind: '',
            sex: '',
            age: '',
            city: '',
            author: '',
            phone: '',
            info: ''
        }
      };

      onSubmit = (e) => {
        const { onAnimalAdd } = this.props;
        const { name, kind, sex, age, city, author, phone, info } = this.state;
        if (typeof onAnimalAdd === "function") {
          onAnimalAdd({ name, kind, sex, age, city, author, phone, info});
        }
        e.preventDefault();
      
      }

     onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render(){
      const { name, kind, sex, age, city, author, phone, info } = this.state;
        return(
            <form onSubmit={this.onSubmit} style={formStyle}>
                 <input 
                type="text"
                name="name"
                placeholder=" име на животното ..."
                value={name}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>

                <input 
                type="text"
                name="kind"
                placeholder=" котка или куче ..."
                value={kind}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="sex"
                placeholder="Въведете пол ..."
                value={sex}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="age"
                placeholder="Години на животното ..."
                value={age}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="city"
                placeholder="населено място ..."
                value={city}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="author"
                placeholder="Име за контакт ..."
                value={author}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="text"
                name="phone"
                placeholder="Телефон за връзка ..."
                value={phone}
                onChange={this.onChange}
                style={inputStyle}
                />
                <br/>
                <input 
                type="textarea"
                name="info"
                placeholder="информация  ..."
                value={info}
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



export default AddAnimal;