import styled from "styled-components";

export const FooterStyled = styled.footer`
  position: relative;
  width: 100%;

  padding: 14px 16px;
  padding-bottom: 30px;

  
  .logos {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  .title {
    font-weight: 900;

    span {
      display: inline-block;
      height: 8px;
      width: 8px;
      background-color: #e7332b;
      border-radius: 50%;
    }
  }
  .text {
    color: #667085;
  }

  .logos div {
    margin-top: 1.5rem;
  }
  hr {
    background-color: #eaecf0;
    height: 1px;
    margin: 2rem 0;
    
    border: none;
  }
`;
