import styled from "styled-components";

export const LinkStyled = styled.a`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

all: unset;
display: flex;
justify-content: center;
box-sizing: border-box;
align-items: center;
height: 76px;
width: 90%;
font-family: 'Inter', sans-serif;
font-weight: 500;
padding: 4px;
color: #101828;
font-size: 18px;
margin-top: 24px;
text-align: center;
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