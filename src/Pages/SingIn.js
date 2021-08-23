import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function SignIn() {
  const { setUser } = useContext(UserContext);

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function HandleData(e) {
    e.preventDefault();
    const body = { email, password };
    const request = axios.post("http://localhost:4000/sign-in", body);

    setLoading(true);

    request.then((response) => {
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      history.push("/menu");
    });

    request.catch(() => {
      alert("Falha no login, email ou senha incorretos!");
      setLoading(false);
    });
  }

  return (
    <>
      <Logo onClick={() => history.push("/")}> MyWallet </Logo>

      <Container>
        <form onSubmit={HandleData}>
          <input
            type="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <input
            type="password"
            minlength="6"
            required
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          <button className="Save" type="submit" required isdisabled={loading}>
            {!loading ? (
              "Entrar"
            ) : (
              <Loader type="ThreeDots" color="#FFF" height={45} width={50} />
            )}
          </button>
        </form>

        <div onClick={() => history.push("/sign-up")}>
          {" "}
          Primeira vez? Cadastre-se!
        </div>
      </Container>
    </>
  );
}

const Logo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap");
  font-family: "Saira Stencil One";
  font-size: 32px;
  line-height: 50px;
  color: #ffffff;
  text-align: center;
  margin-top: 159px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;

  input {
    width: 326px;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    border: none;
    margin-bottom: 13px;
  }

  button {
    margin-top: 20px;
    width: 326px;
    height: 58px;
    background: #a328d6;
    border-radius: 5px;
    border: none;
    padding: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    opacity: ${(props) => (props.isdisabled ? 0.2 : 1)};
  }

  div {
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    margin-top: 32px;
  }
`;
