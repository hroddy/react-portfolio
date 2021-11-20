import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
const { validateEmail } = require("../../utils/helpers");

const Contact = () => {
  const [email, setUpdateEmail] = useState("");
  const [name, setUpdateName] = useState("");
  const [message, setUpdateMessage] = useState("");
  const [error, updateError] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (isValid) {
        setUpdateEmail(e.target.value);
        updateError("");
      } else {
        updateError("This is not a valid email.");
      }
    }

    if (e.target.name === "name") {
      if (e.target.value.length >= 1) {
        setUpdateName(e.target.value);
        updateError("");
      } else {
        updateError("You must include a name.");
      }
    }

    if (e.target.name === "message") {
      if (e.target.value.length >= 1) {
        setUpdateMessage(e.target.value);
        updateError("");
      } else {
        updateError("You must include a message.");
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Message submitted to hannah.roddy@gmail.com from ${email}!`);
    const newObj = { name: name, email: email, message: message };
    console.log(newObj);
  };
  return (
    <Container>
      <Typography
        id="contact"
        component="h2"
        variant="h2"
        align="center"
        fontStyle="italic"
        gutterBottom
      >
        Contact
      </Typography>
      <Grid
        container
        spacing={1}
        
        direction="column"
        justifyContent="center"
        alignItems="center"
        my={3}
      >
        <form onSubmit={handleSubmit}>
          <Grid item sm={12} mb={3}>
            <TextField
              name="name"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onBlur={handleChange}
            />
          </Grid>
          <Grid item sm={12} my={3}>
            <TextField
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onBlur={handleChange}
            />
          </Grid>
          <Grid item md={12} my={3}>
            <TextField
              name="message"
              id="outlined-multiline-static"
              multiline
              rows={7}
              label="Message"
              variant="outlined"
              onBlur={handleChange}
            />
          </Grid>
          {error && <p>{error}</p>}
          <Grid item sm={12} my={2} align="center">
            <Button
              variant="contained"
              color="primary"
              href="mailto:hannah.roddy@gmail.com"
              type="submit"
            >
              Send message
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};

export default Contact;
