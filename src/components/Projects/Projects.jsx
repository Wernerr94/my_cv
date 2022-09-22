import React from "react";
import {
  ProjectsSection,
  Title,
  ProjectArticle,
  ProjectName,
  List,
  ListItem,
  Description,
} from "./Projects,styled";
export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <Title>Projects</Title>
      <ProjectArticle>
        <ProjectName>Munchkin Fallout</ProjectName>
        {/* do slider */}
        <List>
          <ListItem>
            <img src="/public/1.png" alt="screenshot" />
          </ListItem>
          <ListItem>
            <img src="/public/2.png" alt="screenshot" />
          </ListItem>
          <ListItem>
            <img src="/public/3.png" alt="screenshot" />
          </ListItem>
          <ListItem>
            <img src="/public/4.png" alt="screenshot" />
          </ListItem>
          {/* do screnshoot with modal & mainUser Inventory */}
        </List>
        <Description>
          Munchkin fallout is a board game(3-6 players) that I and my friends
          enjoyed playing. We can say that it has become one of the additional
          fervors of interest in programming. I remember how there was a very
          big desire to write this game. With a friend, we decided to bring it
          to the web. It's been a little bit of a challenge for me since this is
          my first major project. Now it's currently in progress.
        </Description>
        <Description>
          We used React.js(backend/frontend), styled-components, socket.io
        </Description>
      </ProjectArticle>
    </ProjectsSection>
  );
}
