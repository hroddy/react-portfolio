import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <div style={{
      position: 'fixed',
      width: '100vw',
      bottom: 0,
      zIndex: 10
    }}>
      <Box
      
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Toolbar>
          <Grid container spacing={9} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="body2" color="primary" align="left">
                <CopyrightIcon></CopyrightIcon> Made by Hannah Roddy,{" "}
                {new Date().getFullYear()}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="primary" align="center">
                <GitHubIcon></GitHubIcon>
                <Link href="github.com/hroddy" underline="hover">Github</Link>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="primary" align="right">
                <LinkedInIcon></LinkedInIcon>
                <Link href="https://www.linkedin.com/in/hannah-roddy-4a43ab214/" underline="hover">
                  LinkedIn
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </div>
  );
};

export default Footer;
