import { connect } from "react-redux";
import { Form } from "react-router-dom";
import { TextField, Button, MenuItem, Alert, Grid } from "@mui/material"

import { addPerson } from "../actions/index";

function AddPerson({ addPerson, person, newPersonId }) {

  function handleChangeName(e) {
    person.name = e.target.value;
  }

  function handleChangeAge(e) {
    person.age = e.target.value;
  }

  function handleChangeGender(e) {
    person.gender = e.target.value;
  }

  function handleClick(e) {
    addPerson(person);
  }

  return(
    <Form method="post">
      <Grid container spacing={2} direction="column">
        <Grid item xs={6}>
          {newPersonId != null ?
          <Alert variant="filled" severity="success">New person added: {newPersonId}</Alert> : ""
          }
        </Grid>
        <Grid item xs={3}>
          <TextField id="name" label="Name" variant="outlined" onChange={handleChangeName} value={person?.name} />
        </Grid>
        <Grid item xs={3}>
          <TextField id="gender" select label="Gender" onChange={handleChangeGender} value={person?.gender} >
            <MenuItem value={'MALE'}>Male</MenuItem>
            <MenuItem value={'FEMALE'}>Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField id="age" label="Age" inputProps={{ inputMode: 'numeric' }} onChange={handleChangeAge} value={person?.age} />
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" onClick={handleClick}>Save</Button>
        </Grid>
      </Grid>
    </Form>
  );
}

function mapStateToProps(state) {
    return {
      person: state.person,
      newPersonId: state.newPersonId,
    };
  }
  
function mapDispatchToProps(dispatch) {
  return {
    addPerson: (payload) => dispatch(addPerson(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);