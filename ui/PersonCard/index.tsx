import styled from "styled-components";

const Card = styled.div`
  background-color: var(--black);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Image = styled.img`
  border-radius: 50%;
`;

const Name = styled.span`
  color: var(--strong-white);
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
`;

const PersonCard = ({ children, img }: { children: string; img: string }) => {
  return (
    <Card>
      <Image src={img} alt='client photo' />
      <Name>{children}</Name>
    </Card>
  );
};

export default PersonCard;
