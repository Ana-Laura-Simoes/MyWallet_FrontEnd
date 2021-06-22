import styled from 'styled-components';

import { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import{RiLogoutBoxRLine} from 'react-icons/ri';

export default function Header(){
    const history = useHistory();

    function logout() {
        history.push("/");
    }

    return(
<Container>

<span>Olá, Fulano</span>
<RiLogoutBoxRLine class="icon" onClick={()=>(logout())}/>
</Container>
    );
}

const Container=styled.div `
display:flex;
justify-content: space-between;
font-style: normal;
font-weight: bold;
font-size: 26px;
font-weight: 700;
color: #FFFFFF;
 position:fixed;
 top:0;
 left:0;
 right:0;
 padding: 25px;

.icon{
cursor: pointer;
}

`