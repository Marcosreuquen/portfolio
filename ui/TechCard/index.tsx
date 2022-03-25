import { ComponentType } from "react";
import { Card } from "./styled";

const TechCard = ({ children, name }: { children: any; name: string }) => {
  return <Card name={name}>{children}</Card>;
};

export default TechCard;
