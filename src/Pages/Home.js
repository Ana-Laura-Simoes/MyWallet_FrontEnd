
import styled from "styled-components";
import { useEffect, useState, useContext} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Register from "../Components/Register";
import axios from 'axios';
import UserContext from "../contexts/UserContext";

export default function Home(){

const [registers,setRegisters]=useState([]);
//const [balance,setBalance]=useState(0);
const {user} = useContext(UserContext);
let balance=0;
let exits=0;
let entrances=0;

useEffect(() => {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
    
        const request = axios.get(
          "http://localhost:4000/menu",
          config
        );
        request.then((response) => {
          setRegisters(response.data);
        });
    
        request.catch((error) => {
          console.log(error);
        });
      
  }, [registers]);

 
  registers.forEach((r)=>{if(r.type==="exit") exits=exits+Number(r.value)})
  registers.forEach((r)=>{if(r.type==="entrance")entrances+=Number(r.value)})

  balance=(entrances-exits) ;

    return(
<>
<Container>
<Header/>

<BankStatement notEmpty={registers.length}>
{registers.length===0? <p>Não há registros de entrada ou saída</p> 
:
(
    <>
<div>  
{
registers.map((r)=><Register
key={r.id} 
date={r.date||"30/11"}
description={r.description}
value={r.value}
type={r.type}/>)
}
</div>
<Balance>
<span>SALDO</span>
<span className={balance>=0?"positive":"negative"}>{balance.toFixed(2)}</span>
</Balance> 

</>
)
}
</BankStatement>

<Footer/>
</Container>
</>
    );
}

const Container=styled.div `
padding:25px;
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
justify-content: ${props => props.notEmpty ?  "space-between": "center"};
overflow-x: hidden; 
overflow-y: scroll;
p{
color: #868686;
font-size: 20px;
line-height: 23px;
text-align: center;
}
`;

const Balance = styled.div `
display:flex;
justify-content: space-between;
span{
font-weight: bold;
font-size: 17px;
line-height: 20px;
color: #000000;
}

.positive{
font-weight: normal;
color: #03AC00;
}
.negative{
font-weight: normal;
color: #C70000;
}

`;