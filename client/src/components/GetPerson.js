import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Paper, Avatar, Grid } from "@mui/material"

import { getPersonById } from "../actions/index";

function GetPerson({ getPersonById, person }) {

  let { id } = useParams();

  useEffect(() => {
    getPersonById({id: id})
  }, []);

  return(
    <Grid container spacing={2} direction="column">
      <Grid item direction="row">
        <Grid item><Avatar>U</Avatar></Grid> 
        <Grid item>USER DETAILS</Grid>
      </Grid>
      <Grid item xs={3}>
        <Paper>Name: <b>{person?.name}</b></Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>Gender: <b>{person?.gender}</b></Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>Age: <b>{person?.age}</b></Paper>
      </Grid>
    </Grid>
    
  )
}

function mapStateToProps(state) {
    return {
      person: state.person,
    };
  }
  
function mapDispatchToProps(dispatch) {
  return {
    getPersonById: (payload) => dispatch(getPersonById(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetPerson);