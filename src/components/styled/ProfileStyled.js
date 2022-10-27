import styled from "styled-components";

export const ProfileStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
position: relative;
display: flex;
width: 100%;
margin-top: 54px;
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
#twitter{
    margin-top: 24px;
    line-height: 30px;
    font-weight: 700;
    margin-bottom: 12px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
}
`