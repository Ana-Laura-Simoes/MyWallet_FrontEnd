import Modal from "react-modal";
import styled from "styled-components";
import {useHistory } from "react-router-dom";
import {useState} from "react";

export default function Expired(){

    const history = useHistory();
    //const [isOpen,setIsOpen]=useState(true);
    return(
<Modal
                isOpen={true}
                className="Modal"
                overlayClassName="Overlay"

            >
              <ModalContent>
                <span>Sua sessão expirou!</span>
                <button onClick={()=>(
                  localStorage.removeItem("user"), 
                  history.push("/") 

                )}>LOGIN</button>
              </ModalContent>
</Modal>
    )
}

const ModalContent = styled.div ` 
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

span{
font-weight: bold;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
}
button{
margin-top  :30px ;
background: #FFFFFF; 
width: 70%;
height: 55px;
color: #A328D6;
border-radius: 7px;
border:none;
font-weight: bold;
font-size: 26px;
line-height: 31px;
}
`;