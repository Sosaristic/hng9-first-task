import styled from "styled-components";

export const ProfileStyled = styled.div`
position: relative;
display: flex;
width: 100%;
margin-top: 54px;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: red;

.img{
    width: 88px;
    height: 88px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
#twitter{
    margin-top: 24px;
}
`