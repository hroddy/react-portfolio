import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Projects = () => {
  return (
    <Container>
      <Typography
        id="projects"
        component="h2"
        variant="h2"
        align="center"
        fontStyle="italic"
        my={3}
        
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={15}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={4} my={7}>
          <Typography variant="h5" align="center" gutterBottom>
            Project
          </Typography>
          <img href="github.com"></img>
          <Typography variant="body1" align="center" gutterBottom>Brief description of project</Typography>
        </Grid>
        <Grid item xs={4} >
        <Typography variant="h5" align="center" gutterBottom>
            Project
          </Typography>
          <img href="github.com"></img>
          <Typography variant="body1" align="center" gutterBottom>Brief description of project</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h5" align="center" gutterBottom>
            Project
          </Typography>
          <img href="github.com"></img>
          <Typography variant="body1" align="center" gutterBottom>Brief description of project</Typography>
        </Grid>
        <Grid item xs={4} my={3}>
        <Typography variant="h5" align="center" gutterBottom>
            Project
          </Typography>
          <img href="github.com"></img>
          <Typography variant="body1" align="center" gutterBottom>Brief description of project</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h5" align="center" gutterBottom>
            Project
          </Typography>
          <img href="github.com"></img>
          <Typography variant="body1" align="center" gutterBottom>Brief description of project</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h5" align="center" gutterBottom>
            Project
          </Typography>
          <img href="github.com"></img>
          <Typography variant="body1" align="center" gutterBottom>Brief description of project</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
