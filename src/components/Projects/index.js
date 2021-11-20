import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import codingQuiz from "../../assets/coding-quiz.jpg";
import calCounter from "../../assets/cal-counter.jpg";
import techBlog from "../../assets/tech-blog.jpg";
import budgetTracker from "../../assets/budget-tracker.jpg";
import noteTaker from "../../assets/note-taker.jpg";
import alexandraMcking from "../../assets/alexandra-mcking.jpg";

const Projects = () => {
  return (
    <Container>
      <Typography
        id="projects"
        component="h2"
        variant="h2"
        align="center"
        fontStyle="italic"
        my={5}
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={10}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Typography variant="h5" align="center">
            Alexdandra McKing
          </Typography>
          <img
            src={alexandraMcking}
            style={{ width: "100%" }}
            alt="Seagreen nav bar and a Get Started button"
          ></img>
          <Typography variant="body2" align="left">
            A mock up of a high end ecommerce shop.
          </Typography>
          <Typography variant="body1" align="center">
            <Button>
              <Link
                href="https://immense-shelf-57375.herokuapp.com/"
                underline="hover"
                target="_blank"
              >
                Deployed website
              </Link>
            </Button>
            ||{" "}
            <Button>
              <Link
                href="https://github.com/hroddy/high-end-fashion-shop"
                underline="hover"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" align="center" my={1}>
            Calorie Counter
          </Typography>
          <img
            src={calCounter}
            style={{ width: "100%" }}
            alt="two hands hold a diet plan with an open avocado and sushi bowl on a table"
          ></img>
          <Typography variant="body2" align="left">
            An application that stores your daily caloric intake and tracks your
            progress against user defined goals
          </Typography>
          <Typography variant="body1" align="center">
            <Button>
              <Link
                href="https://warm-harbor-01230.herokuapp.com/"
                underline="hover"
                target="_blank"
              >
                Deployed website
              </Link>
            </Button>
            ||{" "}
            <Button>
              <Link
                href="https://github.com/hroddy/calorie-counter"
                underline="hover"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" align="center">
            Tech Blog
          </Typography>
          <img
            src={techBlog}
            style={{ width: "100%" }}
            alt="Tech Blog's white and orange home screen with user posts"
          ></img>
          <Typography variant="body2" align="left">
            A blog where a user can create an account, blog posts, and comment
            on the posts of other users.
          </Typography>
          <Typography variant="body1" align="center">
            <Button>
              <Link
                href="https://tech-blog-hroddy.herokuapp.com/"
                underline="hover"
                target="_blank"
              >
                Deployed website
              </Link>
            </Button>
            ||{" "}
            <Button>
              <Link
                href="https://github.com/hroddy/tech-blog"
                underline="hover"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" align="center">
            Budget Tracker
          </Typography>
          <img
            src={budgetTracker}
            style={{ width: "100%" }}
            alt="Blue and white graph tracking income and expenses"
          ></img>
          <Typography variant="body2" align="left">
            A simple application for tracking expenses and income. Download the
            PWA to allow for offline and online use.
          </Typography>
          <Typography variant="body1" align="center">
            <Button>
              <Link
                href="https://budget-tracker-hroddy.herokuapp.com/"
                underline="hover"
                target="_blank"
              >
                Deployed website
              </Link>
            </Button>
            ||{" "}
            <Button>
              <Link
                href="https://github.com/hroddy/budget-tracker"
                underline="hover"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" align="center">
            Note Taker
          </Typography>
          <img
            src={noteTaker}
            style={{ width: "100%" }}
            alt="Seagreen nav bar and a Get Started button"
          ></img>
          <Typography variant="body2" align="left">
            Draft, save and delete notes easily from this note taking
            application. Access your important reminders easily and conveniently
            in one location.
          </Typography>
          <Typography variant="body1" align="center">
            <Button>
              <Link
                href="https://tranquil-chamber-64702.herokuapp.com/"
                underline="hover"
                target="_blank"
              >
                Deployed website
              </Link>
            </Button>
            ||{" "}
            <Button>
              <Link
                href="https://github.com/hroddy/note-taker"
                underline="hover"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" align="center">
            Coding Quiz
          </Typography>
          <img
            src={codingQuiz}
            style={{ width: "100%" }}
            alt="screenshot of the quiz rules and explanation"
          ></img>
          <Typography variant="body2" align="left">
            Test your basic HTML, CSS and Javascript skills in this two minute
            timed quiz.
          </Typography>
          <Typography variant="body1" align="center">
            <Button>
              <Link
                href="https://hroddy.github.io/coding-quiz/"
                underline="hover"
                target="_blank"
              >
                Deployed website
              </Link>
            </Button>
            ||{" "}
            <Button>
              <Link
                href="https://hroddy.github.io/coding-quiz/"
                underline="hover"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
