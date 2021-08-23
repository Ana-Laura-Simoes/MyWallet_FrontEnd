import styled from "styled-components";
import { useEffect, useState, useContext } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Register from "../Components/Register";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Expired from "../Components/Expired";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const [registers, setRegisters] = useState([]);
  const { user } = useContext(UserContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const request = axios.get("http://localhost:4000/transactions", config);
    request.then((response) => {
      setRegisters(response.data.bankStatement);
      setBalance(response.data.balance);
    });

    request.catch((error) => {
      if (error.response.status === 401) {
        setIsOpen(true);
      }
    });
  }, []); //eslint-disable-line

  return (
    <>
      {isOpen ? <Expired /> : ""}
      <Container>
        <Header />

        <BankStatement notEmpty={registers.length}>
          {registers.length === 0 ? (
            <p>Não há registros de entrada ou saída</p>
          ) : (
            <>
              <div>
                {registers.map((r) => (
                  <Register
                    key={r.id}
                    date={r.date || "30/11"}
                    description={r.description}
                    value={r.value}
                    type={r.type}
                  />
                ))}
              </div>
              <Balance>
                <span>SALDO</span>
                <span className={balance >= 0 ? "positive" : "negative"}>
                  {balance.toFixed(2)}
                </span>
              </Balance>
            </>
          )}
        </BankStatement>

        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 25px;
  width: 100vw;
  height: 100vh;
`;

const BankStatement = styled.div`
  border-top: 68px;
  background: #ffffff;
  margin-top: 78px;
  border-radius: 5px;
  height: 70%;
  padding: 12px;
  padding-top: 23px;

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.notEmpty ? "space-between" : "center")};
  overflow-x: hidden;
  overflow-y: scroll;
  p {
    color: #868686;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
  }
`;

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }

  .positive {
    font-weight: normal;
    color: #03ac00;
  }
  .negative {
    font-weight: normal;
    color: #c70000;
  }
`;
