import styled from "styled-components";
import ProfilePhoto from '../images/profile.png'
import Hoverimg from '../images/profile-hover.png'

export const ProfileStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap");
  position: relative;
  display: flex;
  width: 100%;
  padding-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img {
    width: 88px;
    height: 88px;
    background-image: url("${ProfilePhoto}");

   &:hover{
    background-image: url("${Hoverimg}");
   }
  }
  .shareicon{
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 1px dashed #d0d5dd;
    border-radius: 50%;
  }
  .share {
    display: none;

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      left: 20rem;
      top: 1rem;
      height: 40px;
      width: 40px;
      
      border: 1px dashed #d0d5dd;
      border-radius: 50%;
    }
  }
  .ellipse{
    display: flex;
    position: absolute;
    right: 6%;
    top: 1rem;
    

    @media (min-width: 992px){
        display: none;
    }
  }
  #twitter {
    margin-top: 24px;
    line-height: 30px;
    font-weight: 700;
    margin-bottom: 12px;
    font-size: 20px;
    font-family: "Inter", sans-serif;
  }
`;
