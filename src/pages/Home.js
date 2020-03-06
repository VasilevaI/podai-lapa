import React from 'react';

class Home extends React.Component {


    render() {
        return <React.Fragment>
            <div className="row">
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
                    <div className="home" style={textStyle}>
                        <div className="home-body">
                            <h2>Добре дошли в "Подай лапа"</h2>
                            <p> <h5>Сайтът е създаден да помага на бездомните животни и на всеки желаещ, който иска
                                да си осинови домашен любимец. Ако търсите нов приятел за Вас или Вашето дете, или сте намерили
                                косматко, който се нуждае от дом - сте на правилното място.
                                Екипът на "Подай лапа" се стреми да помогне на четириногите ни приятели да си намерят дом и семейство! </h5>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-7">
                    <div className="home" style={textStyle}>
                        <div className="home-body">
                            <h2>Нека заедно помогнем </h2>
                            <p> <h5>Вече много са намерили своя нов дом, но има още, които търсят топлина и уют.
                     Няма ли да е чудесно, ако им помогнем и Вие сте били тези, които са допринесли? </h5>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="home" style={imageStyle}>
                        <div className="home-body">
                            <img src="images/home-image2.jpg"
                                width="350"
                                height="220"
                                className="d-inline-block align-top"
                                alt="home"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

const imageStyle = {
    padding: '80px',
}

const textStyle = {
    padding: '80px',
    fontFamily: 'Comic Sans MS',

}

export default Home;