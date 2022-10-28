import styled from "styled-components";

export const FooterStyled = styled.footer`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
padding: 12px 16px;

.title{
    font-weight: 900;

    span{
        display: inline-block;
        height: 8px;
        width: 8px;
        background-color: #e7332b;
        border-radius: 50%;
    }

}
.text{
    color: #667085;
}


div{
    margin-top: 1.5rem;
}

@media (min-width: 992px){
    flex-direction: row;
    justify-content: space-around;
}
`