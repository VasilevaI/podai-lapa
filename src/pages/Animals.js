import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import AddAnimalForm from "../components/AddAnimalForm.js";
import AnimalsContainer from "../components/AnimalsContainer.js";


class Animals extends Component {

  componentDidMount(){
      this.props.getAnimals('_id  name kind sex age city author phone info');
  }
 
  renderAnimals = () => {
      const animalsList = this.props.animals.map(animals => {
          return <AnimalsContainer key={animals._id} animals={animals}/>
      })
      return animalsList;
  }
  render() {
      return <div >         
          <AddAnimalForm  />
          {this.renderAnimals()}           
      </div>
  }
  
}

const mapStateToProps = state => {
  return {
    animals: state.animals
  };
};
const mapStateToDispatch = dispatch => {
  return bindActionCreators(
    {
      getAnimals: actions.getAnimals
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Animals);

