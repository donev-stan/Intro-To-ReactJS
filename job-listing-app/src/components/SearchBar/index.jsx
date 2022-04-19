import React from "react";
import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        border: "1px solid black",
        background: "#fff",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        "& > *": {
            flex: 1,
            height: "45px",
            margin: "8px"
        }
    }
})

export default (props) => {

    const classes = useStyles();

  return (
    <Box className={classes.wrapper} p={2} mt={-5} mb={2}>
      <Select defaultValue="Full Time" variant="filled" disableUnderline>
        <MenuItem value="Full Time"> Full Time </MenuItem>
        <MenuItem value="Part Time"> Part Time </MenuItem>
        <MenuItem value="Contract"> Contract </MenuItem>
      </Select>

      <Select defaultValue="Remote" variant="filled" disableUnderline>
        <MenuItem value="Remote"> Remote </MenuItem>
        <MenuItem value="In Office"> In Office </MenuItem>
      </Select>

      <Button variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
};