import { useAboutMe, useServices, useTranslation } from "hooks";
import Caption from "ui/Caption";
import Paragraph from "ui/Paragraph";
import Service from "ui/ServiceCard";
import Subtitle from "ui/Subtitle";

import {
  AboutMeContainer,
  MainContainer,
  ServicesContainer,
  TitlesContainer,
} from "./styled";

const Main = () => {
  const services = useServices();
  const aboutMe = useAboutMe();
  const locale = useTranslation();
  return (
    <MainContainer id='about'>
      <TitlesContainer>
        <Caption primary={true}>
          {locale == "en" ? "ABOUT ME" : "SOBRE MI"}
        </Caption>
        <Subtitle>{aboutMe?.greetings}</Subtitle>
      </TitlesContainer>
      <AboutMeContainer>
        <Paragraph weight='regular'>{aboutMe?.content}</Paragraph>
      </AboutMeContainer>
      <ServicesContainer id='services'>
        {services?.map((service: any) => {
          return (
            <Service
              title={service.title}
              img={service.img}
              key={service.title}>
              {service.content}
            </Service>
          );
        })}
      </ServicesContainer>
    </MainContainer>
  );
};

export default Main;
