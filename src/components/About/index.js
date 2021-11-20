import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import hannah from "../../assets/hannah.JPG";

function About() {
  return (
    <section>
      <Typography
        id="about"
        component="h2"
        variant="h2"
        align="center"
        fontStyle="italic"
        my={7}
      >
        About
      </Typography>
      <Container>
        <Grid
          container
          spacing={5}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={6}>
            <Avatar
              src={hannah}
              sx={{ width: 300, height: 300 }}
              alt="portrait of Hannah Roddy"
            />
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body1">
              Hello! I'm Hannah Roddy, a full stack web developer enrolled in UC
              Berkeley's Extension Coding Bootcamp. I live in Livermore,
              California with my two dogs, Mako and Sia.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default About;
