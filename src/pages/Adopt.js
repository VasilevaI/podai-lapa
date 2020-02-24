import React from 'react';

class Adopt extends React.Component {


    render() {
        return <div class="post" style={postStyle}>
            <div class="col-xs-5 col-sm-3 thumbnail-col">
                <img src="images/cat1.jpg" 
                width="100%"/>
            </div>
           <div class="col-xs-7 col-sm-5 info-col">
               <h3 class="postTitle" title="Мейси"> Мейси</h3>
               <div class="postData">
                   <div class="postLeft">
                       <p class="pleft">Вид: котка </p>
                       <p class="pleft">Пол: женски </p>
                       <p class="pleft">Възраст: под 1г </p>
                       <p class="pleft">Населено място: Пловдив </p>
                   </div>
               </div>
               <div class="btnMore" style={btnMore}>
               <button class="btn info">Прочети още</button>

               </div>

           </div>

        </div>
    }
}

const postStyle = {
    margin: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizzing: 'border-box',

}

const btnMore={
    background: '#2196F3',
    padding: '3px',
    borderRadius: '3px',
    display: 'inline-block',
    float: 'right'
}
export default Adopt;