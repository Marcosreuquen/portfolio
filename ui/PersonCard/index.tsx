import { Card, Image, Name } from "./styled";

const PersonCard = ({ children, img }: { children: string; img: string }) => {
  return (
    <Card>
      <Image src={img} alt='client photo' />
      <Name>{children}</Name>
    </Card>
  );
};

export default PersonCard;
