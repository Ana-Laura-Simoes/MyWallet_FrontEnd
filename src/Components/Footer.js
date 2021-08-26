import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();

  function NewEntrance() {
    history.push("/newtransaction/entrance");
  }

  function NewExit() {
    history.push("/newtransaction/exit");
  }

  return (
    <Container>
      <Button onClick={() => NewEntrance()}>
        <AiOutlinePlusCircle />
        <span>Nova entrada</span>
      </Button>

      <Button onClick={() => NewExit()}>
        <AiOutlineMinusCircle />
        <span>Nova saída</span>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16%;
  padding-right: 16%;

  @media (max-width: 600px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

const Button = styled.button`
  background: #a328d6;
  border-radius: 5px;
  padding: 10px;
  border: none;
  width: 185px;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 620px) {
    width: 155px;
    height: 114px;
  }

  @media (max-width: 440px) {
    width: 40%;
  }
`;
