import React from 'react';

class Contacts extends React.Component {

    state = {
        name: '',
        email: '',
        message: ''
      }

      onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
          
        <React.Fragment>
            
            <div className="col-xs-12 col-md-12" style={containerStyle}>           
            <form style={contactStyle} className="col-xs-12 col-md-3">
            <div className="form-group">
                <label>Име</label>
                <input 
                type="text" 
                name="name" 
                className="form-control" 
                onChange={this.onChange} 
                value={this.state.name} />
            </div>
            <div className="form-group">
                <label>Имейл адрес</label>
                <input 
                type="email" 
                name="emial" 
                className="form-control" 
                onChange={this.onChange} 
                value={this.state.email} />
            </div>
            <div className="form-group">
                <label>Съобщение</label>
                <textarea 
                name="message" 
                className="form-control" 
                rows="5" 
                onChange={this.onChange} 
                value={this.state.message}></textarea>
            </div>
            <button 
            type="submit" 
            className="btn btn-primary">Изпрати</button>
        </form>
        <div className="help-section col-xs-7 col-md-5" >
            <h3>ПОМОГНЕТЕ НА ЖИВОТНО В БЕДА</h3>
            <p> <h5>Чрез "Подай лапа" можете да помогнете по няколко начини: 
            като подадете сигнал за животно в беда; 
            като съобщите за бездомно животно, което търси дом; 
            като съобщите за изгубено животно, за да проверим дали не е в системата ни. 
            Можете да помогнете и само с едно споделяне на уеб сайта в социалните мрежи, за да се запознаят повече хора с дейността ни.</h5></p>
        </div>
        </div>
        </React.Fragment>
        );
    }
}

const containerStyle={
 margin: '55px',
 display:'flex',
 padding:'10px',
 fontFamily:'Comic Sans MS',
 position:'relative',
 left: '200px'
}

const contactStyle={
    border: '1px dotted red',
    padding:'8px',
    marginRight: '20px'
    
}

export default Contacts;