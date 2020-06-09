import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteAnimal} from '../redux/actions';

const AnimalsContainer =props => {

    const dispatch = useDispatch();

    const dispatchDeleteAnimal = () => {
        dispatch(deleteAnimal({
            _id: props.animals._id
        }, '_id  name kind sex age city author phone info'));
    }
   
        return <div className="container"  style={containerStyle}>
            <div className="col-xs-12 col-md-12 ">
            <div className="post" style={postStyle}>
            <div className="col-xs-5 col-sm-4 thumbnail-col" style={infoStyle}>
                <img src="images/animal.jpg" 
                width="100%" height="100%"/>
            </div>
           <div className="col-xs-7 col-sm-3 info-col" style={infoStyle}>
               <h3 className="postTitle" title="Мейси" style={titleStyle} > {props.animals.name}</h3>
               <div className="postData">
                       <p className="pleft">Вид: {props.animals.kind} </p>
                       <p className="pleft">Пол: {props.animals.sex} </p>
                       <p className="pleft">Възраст: {props.animals.age} </p>
                       <p className="pleft">Населено място: {props.animals.city} </p>
               </div>
               <div className="btnMore" style={btnMore}>
               <button className="btn info">Още</button>
               </div>
           </div>
           <div className="col-xs-12 col-sm-4 author-col" style={authorStyle}>
               <p className="author"> <h4>{props.animals.author}</h4></p>
               <div className="authorInfo">
                   <p className="contactInfo">Телефон: {props.animals.phone}</p>
                   <p> Допълнителна информация:{props.animals.info}</p>
               </div>
               <button type="button" className="btn btn-danger mb-1" onClick={dispatchDeleteAnimal}>Изтрий</button>
           </div>
        </div>    
        </div>
        </div>
       
    
}

const containerStyle={
    paddingLeft: '25px',
    paddingRight: '15px',
    fontFamily:'Comic Sans MS',
}
const postStyle = {
    margin: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizzing: 'border-box',
    border: '1px solid black',    
}
const titleStyle={
    borderBottom: '2px solid white' 
}
const infoStyle={
 background: '#b30000',
    padding: '8px',
    color: 'white', 
}
const authorStyle={
    padding: '8px',
    marginLeft: '20px' 
}
const btnMore={
     background: '#2196F3',
    padding: '1px',
    borderRadius: '3px',
    display: 'inline-block',
    float: 'right' 
}
export default AnimalsContainer