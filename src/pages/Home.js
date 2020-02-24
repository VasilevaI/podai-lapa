import React from 'react';

class Home extends React.Component {


    render() {
        return <div className="row">
        <div className="col-md-4">
            <div className="home" style={imageStyle}>
                <div className="home-body">
                <img src="images/home-image.jpg"
                width="350"
                height="220"
                className="d-inline-block align-top"
                alt="home"
                />
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="home" style ={textStyle}>
                <div className="home-body">
                 <h2>Добре дошли в "Подай лапа"</h2> 
                 <p> Сайтът е създаден да помага на бездомните животни и на всеки желаещ, който иска
                     да си осинови домашен любимец. Екипът на "Подай лапа" се стреми да помогне на 
                     четириногите ни приятели да си намерят дом и семейство!  
                 </p>
                </div>
            </div>
        </div>
        
    </div>
    }
}

const imageStyle = {
    padding: '80px',
}

const textStyle = {
    padding: '80px',
    fontFamily:'Comic Sans MS',

}

export default Home;