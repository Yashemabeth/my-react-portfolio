import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const projectData = [
  {
    ProjectName: "Bored-As-Book",
    projectDescription:
      "An app which allows users to randomly generate a list of activities given a random list of criteria, price, participants. The users will be presented with options and will be able to swipe left (delete) or swipe right (add to basket). ",
    projectImage: "/public/",
    github: "https://github.com/Yashemabeth/bored-as-book",
    DeployedUrl: "https://yashemabeth.github.io/bored-as-book/",
  },
  {
    ProjectName: "Code Quiz",
    projectDescription:
      "An app which allows users to randomly generate a list of activities given a random list of criteria, price, participants. The users will be presented with options and will be able to swipe left (delete) or swipe right (add to basket). ",
    projectImage: "./public/assets/bored-as-book.png",
    github: "https://github.com/Yashemabeth/code-quiz",
    DeployedUrl: "https://Yashemabeth.github.io/code-quiz/",
  },
  {
    ProjectName: "Bored-As-Book",
    projectDescription:
      "An app which allows users to randomly generate a list of activities given a random list of criteria, price, participants. The users will be presented with options and will be able to swipe left (delete) or swipe right (add to basket). ",
    projectImage: "./public/assets/bored-as-book.png",
    github: "https://github.com/Yashemabeth/bored-as-book",
    DeployedUrl: "https://yashemabeth.github.io/bored-as-book/",
  },
  {
    ProjectName: "Weather Dashboard",
    projectDescription:
      "An app which allows users to randomly generate a list of activities given a random list of criteria, price, participants. The users will be presented with options and will be able to swipe left (delete) or swipe right (add to basket). ",
    projectImage: "/public/assets/weatherdash.png",
    github: "https://github.com/Yashemabeth/bored-as-book",
    DeployedUrl: "https://yashemabeth.github.io/bored-as-book/",
  },
  {
    ProjectName: "Generate Password",
    projectDescription:
      "An app which allows users to randomly generate a list of activities given a random list of criteria, price, participants. The users will be presented with options and will be able to swipe left (delete) or swipe right (add to basket). ",
    projectImage: "/public/assets/generate pw.png",
    github: "https://github.com/Yashemabeth/bored-as-book",
    DeployedUrl: "https://yashemabeth.github.io/bored-as-book/",
  },
];

// Card Data
//Project Name, Project description, Project img, Github url, Deployed url
export const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={DeployedUrl}>
        <CardMedia
          component="img"
          height="140"
          image={require(`{$projectImage}`)}
          alt=""
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projectDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={github}></Link>
        </Button>
      </CardActions>
    </Card>
  );
};
