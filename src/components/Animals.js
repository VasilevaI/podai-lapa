import React, { Component } from 'react';

class Animals extends Component{
    render(){
        return this.props.animals.map((animals) =>(
            <div className="container" style={containerStyle}>
            <div className="col-xs-12 col-md-10 ">
            <div className="post" style={postStyle}>
            <div className="col-xs-5 col-sm-4 thumbnail-col" style={infoStyle}>
                <img src="images/cat1.jpg" 
                width="100%" height="100%"/>
            </div>
           <div className="col-xs-7 col-sm-3 info-col" style={infoStyle}>
               <h3 className="postTitle" title="Мейси" style={titleStyle} > {animals.name}</h3>
               <div className="postData">
                       <p className="pleft">Вид: {animals.animal} </p>
                       <p className="pleft">Пол: {animals.sex} </p>
                       <p className="pleft">Възраст: {animals.age} </p>
                       <p className="pleft">Населено място: {animals.city} </p>
               </div>
               <div className="btnMore" style={btnMore}>
               <button className="btn info">Още</button>
               </div>
           </div>
           <div className="col-xs-12 col-sm-4 author-col" style={authorStyle}>
               <p className="author"> <h4>{animals.author}</h4></p>
               <div className="authorInfo">
                   <p className="contactInfo">Телефон: {animals.phone}</p>
                   <p> {animals.info}</p>
               </div>
           </div>
        </div>    
        </div>
        </div>
        ));
    }
}

const containerStyle={
    width:'100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px'
}
const postStyle = {
    margin: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizzing: 'border-box',
    border: '2px solid black',
    
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
export default Animals