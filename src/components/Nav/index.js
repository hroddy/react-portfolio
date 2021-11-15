import React from "react";
import Grid from "@mui/material/Grid";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

function Nav(props) {
  const { updateCurrentPage } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="secondary"
      >
        <Toolbar>
        
          <Grid container spacing={1}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center">
            <Grid item xs={4}>
              <Typography variant="h2" component="h1" color="primary">
                <Link href="/" underline="none">
                  Hannah Roddy
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <ButtonGroup>
              <Button
                color="primary"
                href="#about"
                onClick={() => updateCurrentPage("About")}
              >
                About
              </Button>
              <Button
                color="primary"
                href="#contact"
                onClick={() => updateCurrentPage("Contact")}
              >
                Contact
              </Button>
              <Button
                color="primary"
                href="#projects"
                onClick={() => updateCurrentPage("Projects")}
              >
                Projects
              </Button>
              <Button
                color="primary"
                href="#resume"
                onClick={() => updateCurrentPage("Resume")}
              >
                Resume
              </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
