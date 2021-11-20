import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import resume from "../../assets/resume.pdf";

const index = () => {
  return (
    <div>
      <Container>
      
        <Grid
          container
          spacing={1}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          my={3}
        >
          
          <Grid item xs={4}>
          <Typography
              id="resume"
              component="h2"
              variant="h2"
              fontStyle="italic"
              my={3}
            >
              Resume
            </Typography>
            <Button variant="contained" target="_blank" href={resume}>
              View/Download Resume
            </Button>
          </Grid>

          <Grid item xs={8}>
            <embed src={resume} width="100%" height="500px" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default index;
