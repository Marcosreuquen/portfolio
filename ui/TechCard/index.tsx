import { Card, Image } from "./styled";

const TechCard = (props: { img: string; name: string }) => {
  return (
    <Card>
      <Image src={props.img} alt={props.name} />
    </Card>
  );
};

export default TechCard;
