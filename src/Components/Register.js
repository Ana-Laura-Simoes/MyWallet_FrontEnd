import styled  from "styled-components";

export default function Register ({date,description,value,type}){
    return(
<Container>

<div>
<Date>{date}</Date>
<Description>{description}</Description>
</div>
<Value><span className={type}>{value.toFixed(2)}</span></Value>

</Container>
    );
}

const Container=styled.div `
display: flex;
justify-content: space-between;
margin-bottom:10px;
div{
    display: flex;
}
`;

const Date=styled.div `
font-size: 16px;
line-height: 19px;
color: #C6C6C6;
margin-right:10px;
`;

const Description=styled.div `
font-size: 16px;
line-height: 19px;
color: #000000;
`;

const Value =styled.div `
font-size: 16px;
line-height: 19px;

.entrance{
    color: #03AC00;
}
.exit{
    color: #C70000;
}

`;
