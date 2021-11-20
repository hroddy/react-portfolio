import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Broken = (props) => {
  const { updateCurrentPage } = props;
  return (
    <Container>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            id="broken"
            component="h2"
            variant="h2"
            fontStyle="italic"
            my={3}
            align="center"
          >
            Whoops, this page is broken!
          </Typography>
          <Grid item xs={12} my={7} align="center">
            <Button variant="contained" onClick={() => updateCurrentPage("/")}>
              Go home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Broken;
