import { useProjects } from "hooks";
import Caption from "ui/Caption";
import Subtitle from "ui/Subtitle";
import WorkCard from "ui/WorkCard";
import { Section, Grid } from "./styled";
import { useTranslation } from "hooks";
const Projects = () => {
  const projects = useProjects();
  const locale = useTranslation();

  return (
    <Section id='projects'>
      <Caption primary={true}>
        {locale == "en" ? "MY PROJECTS" : "MIS PROYECTOS"}
      </Caption>
      <Subtitle>
        {locale == "en" ? "This is my work" : "Estos son mis trabajos"}
      </Subtitle>
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
