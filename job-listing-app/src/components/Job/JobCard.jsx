import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import React from "react";

const skills = ["Javascript", "React.js", "Node.js"];

const useStyles = makeStyles((theme) => ({
    wrapper: {
        border: "1px solid #e8e8e8",
    },

    companyName: {
        fontSize: "13.5px",
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: "5px",
        display: "inline-block",
        fontWeight: 600
    },

    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        transtion: ".3s",
        cursor: "pointer",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff"
    }
}))



const JobCard = (props) => {

    const classes = useStyles()

  return (
    <Box className={classes.wrapper} p={2}>
      <Grid container alignItems="center">

        <Grid item xs>
          <Typography variant="subtitle1">Front-end Dev</Typography>
          <Typography variant="subtitle1" className={classes.companyName}>Company: Google</Typography>
        </Grid>

        <Grid item xs>
          <Grid item container xsS>
            {skills.map((skill) => (
              <Grid item key={skill} className={classes.skillChip}>
                {" "}
                {skill}{" "}
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item container direction="column" alignItems="flex-end" xs>
          <Grid item>
            <Typography variant="caption">
              {" "}
              1 day ago | Full Time | Remote{" "}
            </Typography>
          </Grid>

          <Grid item>
            <Box mt={2}>
              <Button variant="outlined"> Check </Button>
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
};

export default JobCard;
