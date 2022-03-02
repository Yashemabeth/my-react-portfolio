import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { Stack } from "@mui/material";

export const ProjectCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href="https://yashemabeth.github.io/bored-as-book/">
        <CardMedia
          component="img"
          height="140"
          image="/public/assets/bored-as-book.png"
          alt="image of project"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bored-As-Book
        </Typography>
        <Typography variant="body2" color="text.secondary">
          An app which allows users to randomly generate a list of activities
          given a random list of criteria, price, participants. The users will
          be presented with options and will be able to swipe left (delete) or
          swipe right (add to basket).
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
};
