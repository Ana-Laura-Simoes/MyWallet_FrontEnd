import styled from "styled-components";
import Loader from "react-loader-spinner";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

export default function SignUp(){
const history=useHistory();    
const [loading,setLoading]=useState(false);

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");


function HandleData(e){
    e.preventDefault();
    
    if(password!=confirmPassword){
        alert("As senhas digitadas são diferentes!");
        
        return;
    }
    setLoading(true);
    const body = { 
 };
    const request = axios.post(
          "http://localhost:4000/signUp",
          body
        );
        request.then((data)=>
        console.log(data),
        setLoading(false),
        
        );
        request.catch(alert("Não foi possível realizar o cadastro!"));
}    
    
return(
   
<>
<Logo  onClick={()=>(history.push("/"))}> MyWallet </Logo>

<Container>
<form onSubmit={HandleData}>
<input
type="text"
required
placeholder="Nome"
value={name} 
onChange={e => setName(e.target.value)} 
disabled={loading}
/>  

<input
type="email"
required
placeholder="E-mail"
value={email} 
onChange={e => setEmail(e.target.value)} 
disabled={loading}
/>  

<input
type="password"
required
placeholder="Senha"
value={password} 
onChange={e => setPassword(e.target.value)} 
disabled={loading}
/>  

<input
type="password"
required
placeholder="Confirme a senha"
value={confirmPassword} 
onChange={e => setConfirmPassword(e.target.value)} 
disabled={loading}
/>  

<button class="Save" type="submit" required isDisabled={loading} >
 {!loading ? "Cadastrar" : <Loader type="ThreeDots" color="#FFF" height={45} width={50}/>}
</button> 

</form>

<div onClick={()=>(history.push("/"))}>Já tem uma conta? Entre agora!</div>

</Container>
</>
);

}



const Logo = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
font-family: "Saira Stencil One";
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
text-align: center;
margin-top:95px;
`;

const Container = styled.div ` 
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding:25px;

input{
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
border:none;
margin-bottom: 13px;
}

button{
margin-top:20px ;
width: 326px;
height: 58px;
background: #A328D6;
border-radius: 5px;
border:none;
padding:13px;
display:flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
opacity: ${props => props.isDisabled ? 0.2 : 1};
}

div{
font-weight: bold;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
margin-top:32px;
}
`;