import { RiRegisteredFill } from "react-icons/ri";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Home(){

const [register,setRegister]=useState([]);
    return(
<>
<Container>
<Header/>

<BankStatement>
{register.length===0? <p>Não há registros de entrada ou saída</p> :<p>oi</p>}
</BankStatement>

<Footer/>
</Container>
</>
    );
}

const Container=styled.div `
padding:25px;
background:#8C11BE;
width:100vw;
height:100vh;
`;

const BankStatement =styled.div`
border-top:68px;
background:#FFFFFF;
margin-top: 78px;
border-radius: 5px;
height: 70%;
padding:12px;
padding-top: 23px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow-x: hidden; 
overflow-y: scroll;
p{
color: #868686;
font-size: 20px;
line-height: 23px;
text-align: center;
}
`;