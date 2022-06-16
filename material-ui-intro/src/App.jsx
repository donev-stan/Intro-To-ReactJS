import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  ButtonGroup,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

function App() {
  
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In illum
              quo consectetur, dicta eum tempore quae! Earum, eaque quaerat. Ad
              perspiciatis perferendis quod corrupti possimus, molestias omnis
              repellat molestiae eveniet!
            </Typography>
          </Container>
        </div>

        <div>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="outlined" color="primary">
                See my photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                See my photos
              </Button>
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}

export default App;
