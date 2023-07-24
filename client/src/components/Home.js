import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Stack } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

import { getAllPersons } from "../actions/index";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, editable: true },
  { field: 'gender', headerName: 'Gender', width: 100 },
];

function Home({ getAllPersons, persons }) {

  let navigate = useNavigate();

  useEffect(() => {
    getAllPersons()
  }, []);

  function handleClick() {
    navigate("/add");
  }

  function handleSelection(p, e) {
    navigate("/details/" + p.id);
  }

  return(
    <Stack spacing={2}>
      <Stack direction="row">
        <Button variant="outlined" onClick={handleClick}>Add person</Button>
      </Stack>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={persons}
          columns={columns}
          pageSize={5}
          onRowDoubleClick={handleSelection}
        />
      </div>
    </Stack>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);