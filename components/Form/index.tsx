import styled from "styled-components";
import Button from "ui/Button";
import Caption from "ui/Caption";
import Input from "ui/Input";
import Swal from "sweetalert2";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
  max-width: 465px;
  gap: 22px;
`;

const Form = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    Swal.fire({
      title: "Hello World",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Caption primary={true}>Get on toch.</Caption>
      <Input type='text' placeholder='Name' name='name' />
      <Input type='email' placeholder='Email' name='email' />
      <Input type='textarea' placeholder='Comments' name='comments' />
      <Button>Enviar</Button>
    </StyledForm>
  );
};

export default Form;
