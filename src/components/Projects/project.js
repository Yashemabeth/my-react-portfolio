import * as React from "react";
import { ProjectCard } from "../ProjectCard";

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

export const Project = () => {
  return (
    <div>
      {projectData.map((project) => (
        <ProjectCard project={project} key={project.ProjectName} />
      ))}
    </div>
  );
};
