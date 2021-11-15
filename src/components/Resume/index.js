import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const index = () => {
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={1}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          my={3}
        >
          <Grid item>
            <Typography
              id="resume"
              component="h2"
              variant="h2"
            
              fontStyle="italic"
            >
              Resume
            </Typography>
          </Grid>
          <Grid item my={5}>
            <Button
              variant="contained"
              
              target="_blank"
              href="BLANK.pdf"
            >
              View/Download Resume
            </Button>
          </Grid>
          {/* <embed src="dog.pdf" width="80%" height="500px" /> */}
        </Grid>
      </Container>
    </div>
  );
};

export default index;
