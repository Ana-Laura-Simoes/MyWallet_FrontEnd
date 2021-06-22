import styled from "styled-components";
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";

export default function Footer(){
    const history = useHistory();
    
    function NewEntrance() {
        history.push("/entrance");
    }

    function NewExit() {
        history.push("/exit");
    }

    return(
<Container>

<Button onClick={()=>(NewEntrance())}>
<AiOutlinePlusCircle/>
 <span>Nova entrada</span> 
</Button>

<Button onClick={()=>(NewExit())}>
<AiOutlineMinusCircle/>
 <span>Nova saída</span>  
</Button>
</Container>
    );
}

const Container = styled.div `
position: fixed;
bottom:0;
left:0;
right:0;
padding:20px;
display:flex;
align-items: center;
justify-content: space-between;
`;

const Button = styled.button `
background: #A328D6;
border-radius: 5px;
padding:10px;
border:none;
width: 155px;
height: 114px;
display: flex;
flex-direction: column;
justify-content: space-between;
font-weight: bold;
font-size: 17px;
line-height: 20px;
color: #FFFFFF;
`;
