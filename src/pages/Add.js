import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import AddAnimalForm from "../components/AddAnimalForm.js";
import AnimalsContainer from "../components/AnimalsContainer.js";
import Adopt from "../components/Adopt.js"

function Add(props) {
  console.log("Animals stored in Redux", JSON.stringify(props.animals));

  return (
    <div>
      <AddAnimalForm onAnimalAdd={props.addAnimal} />
      <AnimalsContainer animals={props.animals} />
      <Adopt />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    animals: state.animals
  };
};

const mapStateToDispatch = dispatch => {
  return bindActionCreators(
    {
      addAnimal: actions.addAnimal
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Add);

