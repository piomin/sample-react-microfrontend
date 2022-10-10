import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

function AddPerson() {

    return(
      <div>Add Person</div>
    );
}

function mapStateToProps(state) {
    return {
      persons: state.persons,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getAllPersons: () => dispatch(getAllPersons({})),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);