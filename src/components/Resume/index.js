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
          spacing={3}
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
              mb={3}
            >
              Resume
            </Typography>
            <Button variant="contained" target="_blank" href={resume}>
              View/Download Resume
            </Button>
            <Typography id="skills" variant="h5" mt={9} mb={2}>
              Skills
            </Typography>
            <Typography variant="body2">• JavaScript</Typography>
            <Typography variant="body2">• React.js</Typography>
            <Typography variant="body2">• Node.js</Typography>
            <Typography variant="body2">• Express.js</Typography>
            <Typography variant="body2">• Handlebars.js</Typography>
            <Typography variant="body2">• Sequelize</Typography>
            <Typography variant="body2">• MySQL</Typography>
            <Typography variant="body2">• MongoDB</Typography>
            <Typography variant="body2">• Git / GitHub</Typography>
            <Typography variant="body2">• Agile development</Typography>
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
