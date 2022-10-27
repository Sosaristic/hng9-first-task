import styled from "styled-components";

export const ProfileStyled = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.img{
    width: 88px;
    height: 88px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
`