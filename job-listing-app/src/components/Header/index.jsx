import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";

const index = (props) => {
  return (
    <Box py={10} bgcolor="secondary.main" color="white">
      <Grid container justify="center">
        <Grid item xs={10}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5"> Stundent.BG </Typography>
            <Button variant="contained" color="primary">
              Post a job
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default index;
