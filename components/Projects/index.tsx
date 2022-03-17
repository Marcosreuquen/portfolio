import { useProjects } from "hooks";
import Caption from "ui/Caption";
import Subtitle from "ui/Subtitle";
import WorkCard from "ui/WorkCard";
import { Section, Grid } from "./styled";

const Projects = () => {
  const projects = useProjects();

  return (
    <Section id='projects'>
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
