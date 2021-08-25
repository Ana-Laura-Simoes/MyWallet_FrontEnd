import Modal from "react-modal";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Expired() {
  const history = useHistory();

  return (
    <Modal isOpen={true} className="Modal" overlayClassName="Overlay">
      <ModalContent>
        <span>Sua sessão expirou!</span>
        <button
          // eslint-disable-next-line
          onClick={() => (localStorage.removeItem("user"), history.push("/"))}
        >
          LOGIN
        </button>
      </ModalContent>
    </Modal>
  );
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
  button {
    margin-top: 30px;
    background: #ffffff;
    width: 70%;
    height: 55px;
    color: #a328d6;
    border-radius: 7px;
    border: none;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
  }
`;
