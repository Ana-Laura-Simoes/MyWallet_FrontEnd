import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import axios from "axios";

export default function Header() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  function signOut() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const request = axios.post("http://localhost:4000/sign-out", {}, config);

    request.then((response) => {
      localStorage.removeItem("user");
      history.push("/");
    });

    request.catch((error) => {
      alert("Falha ao sair!");
    });
  }

  return (
    <Container>
      <span>Olá, {user.name}</span>
      <RiLogoutBoxRLine className="icon" onClick={() => signOut()} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 25px;

  .icon {
    cursor: pointer;
  }
`;
