import styled from "styled-components";

export const LinkStyled = styled.a`
all: unset;
display: flex;
justify-content: center;
box-sizing: border-box;
align-items: center;
height: 76px;
width: 90%;
margin-top: 24px;
background: #EAECF0;
border-radius: 8px;
border: 1px solid #EAECF0;
cursor: default;
&:hover{
    border: 3px solid #D0D5DD; 
}

@media(min-width: 992px){
    width: 70%;
}
`