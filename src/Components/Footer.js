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
        <AiOutlinePlusCircle className="icon" />
        <h1>Nova</h1> <h2>entrada</h2>
      </Button>

      <Button onClick={() => NewExit()}>
        <AiOutlineMinusCircle className="icon" />
        <h1>Nova</h1> <h2>saída</h2>
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
  color: #ffffff;
  cursor: pointer;

  .icon {
    color: white;
    font-size: 20px;
  }
  h1,
  h2 {
    margin: 0 auto;
    letter-spacing: 0em;
    color: white;
    padding-bottom: 10px;
  }

  @media (max-width: 620px) {
    width: 155px;
    height: 114px;
  }

  @media (max-width: 440px) {
    width: 40%;
    h1,
    h2 {
      font-size: 15px;
      padding-bottom: 5px;
    }
  }
`;
