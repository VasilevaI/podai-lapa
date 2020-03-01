import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import AddAnimal from "../components/AddAnimal.js";
import Animals from "../components/Animals.js"

function Add(props) {
  console.log("Animals stored in Redux", JSON.stringify(props.animals));
  return (
    <div>
      <AddAnimal onAnimalAdd={props.addAnimal} />
      <Animals animals={props.animals} />
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

