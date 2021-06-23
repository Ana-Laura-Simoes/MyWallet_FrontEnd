import styled from 'styled-components';
import {useState} from 'react';
import Loader from "react-loader-spinner";
import axios from 'axios';
import {useHistory} from "react-router-dom";

export default function NewEntrance(){
const history = useHistory();

const[Value,setValue]=useState("");
const[description,setDescription]=useState("");
const[loading,setLoading] = useState(false);

function HandleData(e){
    e.preventDefault();
    setLoading(true);
    const body = { 
        value: Value, 
        description:description };
    const request = axios.post(
          "http://localhost:4000/entrance",
          body
        );
        request.then((data)=>
        setLoading(false),
        history.push("/menu")
        );
}

return(
<Container>
<span>Nova Entrada</span>

<form onSubmit={HandleData}>
<input
type="number"
required
placeholder="Valor"
value={Value} 
onChange={e => setValue(e.target.value)} 
disabled={loading}

/>  


<input
type="text"
required
placeholder="Descrição"
value={description} 
onChange={e => setDescription(e.target.value)} 
disabled={loading}

/>  

<button className="Save" type="submit" required isdisabled={loading} >
 {!loading ? "Salvar entrada" : <Loader type="ThreeDots" color="#FFF" height={45} width={50}/>}
</button> 

</form>

<Cancel 
isdisabled={loading} 
disabled={loading} 
onClick={()=> (history.push("/menu"))}>
Cancelar
</Cancel>

</Container>
    );
}

const Container = styled.div `
padding:25px;
font-style: normal;
font-weight: bold;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
display: flex;
flex-direction: column;

span{
    display:block;
    margin-bottom:40px;
}

input{
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
border:none;
margin-bottom:15px;
padding:15px;

::placeholder {
    color: #000000;
    font-size: 20px;
  }
}

.Save{
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
opacity: ${props => props.isdisabled ? 0.8 : 1};
}

`;

const Cancel = styled.button `
width: 326px;
height: 58px;
margin-top:15px;
background: #FFFFFF;
border-radius: 5px;
border:none;
padding:13px;
display:flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 20px;
line-height: 23px;
color: #A328D6 ;
opacity: ${props => props.isdisabled ? 0.8 : 1};
`;