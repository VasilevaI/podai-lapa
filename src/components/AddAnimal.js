import React, { Component } from "react";

class AddAnimal extends Component {
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
    },
    displayForm:false
  };

 

  onSubmit = (e) => {
    const { onAnimalAdd } = this.props;
    const { name, kind, sex, age, city, author, phone, info } = this.state;
    if (typeof onAnimalAdd === "function") {
      onAnimalAdd({ name, kind, sex, age, city, author, phone, info });
    }
    e.preventDefault();

  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, kind, sex, age, city, author, phone, info } = this.state;
    return (
      <div className="col-xs-12 col-sm-5">
        <form onSubmit={this.onSubmit} style={formStyle}>
          <fieldset>
            <legend>Добави животно за осиновяване: </legend> <br />
            <label className="col-sm-5" >Име на животното: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
              style={inputStyle}
            />
            <br />
            <label className="col-sm-5"> Вид (коте или куче): </label>
            <input
              type="text"
              name="kind"
              value={kind}
              onChange={this.onChange}
              style={inputStyle}
            />

            <br />
            <label className="col-sm-5">Пол: </label>
            <input
              type="text"
              name="sex"
              value={sex}
              onChange={this.onChange}
              style={inputStyle}
            />
            <br />
            <label className="col-sm-5">Възраст: </label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.onChange}
              style={inputStyle}
            />
            <br />
            <label className="col-sm-5">Населено място: </label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.onChange}
              style={inputStyle}
            />
            <br />
            <label className="col-sm-5">Лице за контакт: </label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={this.onChange}
              style={inputStyle}
            />
            <br />
            <label className="col-sm-5">Телефон: </label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={this.onChange}
              style={inputStyle}
            />
            <br />
            <label className="col-sm-5">Допълнителна информация: </label>
            <textarea
              name="info"
              value={info}
              onChange={this.onChange}
              style={inputStyle}
            />
            <br />
            <input
              type="submit"
              value="ДОБАВИ"
              className="btn"
              style={btnStyle}
            />
          </fieldset>
        </form>

      </div>
    )
  }
}



const formStyle = {
  margin: '10px',
  padding: '8px',
  border: '1px solid red',
  fontFamily:'Comic Sans MS'
}

const inputStyle = {
  marginLeft: '15px',
  marginBottom: '5px',

}

const btnStyle = {
  background: '#2196F3',
  padding: '2px',
  borderRadius: '3px',
  float: 'right'
}



export default AddAnimal;