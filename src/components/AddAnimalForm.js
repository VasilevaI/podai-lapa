import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {addAnimal} from '../redux/actions';
let myFormRef = React.createRef()
const AddAnimalForm = () => {
 
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [kind, setKind] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [author, setAuthor] = useState('');
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState('');
  const [displayForm, setDisplayForm] = useState(false);

 const dispatchAddAnimal = () => {
  myFormRef.reset();  
   dispatch(addAnimal({
    name, kind,imageUrl, sex, age, city, author, phone, info
   },'_id name kind imageUrl sex age city author phone info')); 
  }

  const onShowButtonClicked = () => {
    setDisplayForm(true)
  };

  const onHideButtonClicked = () => {
   setDisplayForm(false)
  };
 
    return !displayForm ? (
      <button className="col-xs-12 col-md-3" onClick={onShowButtonClicked} style={btnShowStyle}>Добави за осиновяване</button>
    ) : (
        <React.Fragment>
          <div className="col-xs-12 col-sm-9">
            <button className="col-xs-12 col-md-3" onClick={onHideButtonClicked} style={btnHideStyle}>Скрий </button>
            <form ref={(el) => myFormRef = el} style={formStyle} >
  <div className="form-row">
    <div className="form-group col-md-6">
       <label htmlFor="animal-name">Име</label>
      <input type="text"
                className="form-control"
                onChange={e => setName(e.target.value)}
                id="animal-name" 
                placeholder="Въведи име "
              />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="kind">Вид</label>
       <input 
                type="text"
                onChange={e => setKind(e.target.value)}
                className="form-control" 
                id="kind" 
                placeholder="Въведи вид"
               
                />
    </div>
  </div>
  <div className="form-row">
  <div className="form-group col-md-12">
       <label htmlFor="animal-img">Снимка</label>
      <input type="text"
                className="form-control"
                onChange={e => setImageUrl(e.target.value)}
                id="animal-img" 
                placeholder="Въведи URL за картинка "
              />
              <img src={imageUrl} className="d-block img-fluid" alt=""/>
    </div>
    </div>
 
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="sex">Пол</label>
       <input 
                type="text" 
                className="form-control" 
                onChange={e => setSex(e.target.value)}
                id="sex"
                placeholder="Въведи пол"
               
                />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="age">Възраст</label>
       <input 
                type="text" 
                className="form-control" 
                onChange={e => setAge(Number(e.target.value))}
                id="age" 
                placeholder="Въведи възраст"
               />
    </div>
    <div className="form-group col-md-4">
     <label htmlFor="city">Населено място</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setCity(e.target.value)}
                id="city" 
                placeholder="Въведи град"
               />
    </div>
  </div>
 
   <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="author">Автор</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setAuthor(e.target.value)}
                id="author" 
                placeholder="Въведи автор"
               />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="phone">Телефон за контакт</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setPhone(e.target.value)}
                id="phone" 
                placeholder="Въведи телефон "
               />
    </div>
    <div className="form-group col-md-6">
     <label htmlFor="info">Допълнителна информация</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setInfo(e.target.value)}
                id="info" 
                placeholder=""
               />
    </div>
  </div>
   <button type="button" className="btn btn-primary" onClick={dispatchAddAnimal} >Добави</button>
</form>

          </div>
        </React.Fragment>
      );
  
}


const formStyle = {
  margin: '10px',
  padding: '8px',
  border: '1px solid red',
  fontFamily: 'Comic Sans MS',
  position: 'relative',
  left: '150px'
}

const btnShowStyle = {
  background: '#2196F3',
  padding: '8px',
  borderRadius: '5px',
  margin: '10px',
  position: 'relative',
  left: '790px'
}

const btnHideStyle = {
  background: '#2196F3',
  padding: '8px',
  borderRadius: '5px',
  margin: '10px',
  position: 'relative',
  left: '850px'
}

export default AddAnimalForm;