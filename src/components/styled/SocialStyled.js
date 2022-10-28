import styled from "styled-components";

export const SocialStyled = styled.div`
position: relative;
display: flex;
justify-content: center;
margin: 1rem 0;
width: 100%;
padding: .5rem 0;
column-gap: 1.5rem;
div{
    width: 20px;
    height: 20px;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
`