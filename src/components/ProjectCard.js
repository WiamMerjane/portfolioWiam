import React from "react";
import { Card, Button } from "react-bootstrap";
import { MarkGithubIcon } from "@primer/octicons-react";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-5">
      <Card>
        <Card.Img variant="top" src={imgUrl} alt="Project" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" href={githubLink}>
            <MarkGithubIcon size={20} className="mr-2" />
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
