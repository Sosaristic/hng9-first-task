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
font-weight: 450;
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
    background: #D0D5DD;
border: 1px solid #D0D5DD;
box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;
}

@media(min-width: 992px){
    width: 70%;
}
`