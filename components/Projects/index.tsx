import { useProjects } from "hooks";
import styled from "styled-components";
import Caption from "ui/Caption";
import Subtitle from "ui/Subtitle";
import WorkCard from "ui/WorkCard";

const Section = styled.section`
  padding: 5%;
`;
const Grid = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
`;

const Projects = () => {
  const projects = useProjects();

  return (
    <Section>
      <Caption primary={true}>MY PROJECTS</Caption>
      <Subtitle>This is my work</Subtitle>
      <Grid>
        {projects?.map((project: any) => {
          return (
            <WorkCard
              key={project.title}
              title={project.title}
              img={project.img}
              repo={project.repository}
              web={project.web}>
              {project.content}
            </WorkCard>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Projects;
