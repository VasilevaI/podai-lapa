import React from 'react';

class Adopt extends React.Component {


    render() {
        return <div class="container" style={containerStyle}>
            <div class="col-xs-12 col-md-2 sidebar">
               

            </div>

            <div class="col-xs-12 col-md-10 ">
        <div class="post" style={postStyle}>
        <div class="col-xs-5 col-sm-4 thumbnail-col" style={infoStyle}>
            <img src="images/cat1.jpg" 
            width="100%" height="100%"/>
        </div>
       <div class="col-xs-7 col-sm-3 info-col" style={infoStyle}>
           <h3 class="postTitle" title="Мейси" style={titleStyle} > Мейси</h3>
           <div class="postData">
                   <p class="pleft"> <span>Вид:</span> котка </p>
                   <p class="pleft">Пол: женски </p>
                   <p class="pleft">Възраст: под 1г </p>
                   <p class="pleft">Населено място: Пловдив </p>
           </div>
           <div class="btnMore" style={btnMore}>
           <button class="btn info">Още</button>
           </div>
       </div>
       <div class="col-xs-12 col-sm-4 author-col" style={authorStyle}>
           <p class="author"> <h4>Таня Иванова</h4></p>
           <div class="authorInfo">
               <p class="contactInfo">Телефон: 0888122456</p>
               <p> Котето е възпитано и обича да си играе. Разбира се с деца.</p>
           </div>
       </div>
    </div>

    
    </div>
        </div>
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
export default Adopt;