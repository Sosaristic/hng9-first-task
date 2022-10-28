import React from 'react'
import logo2 from "./images/I4G.png"
import { FooterStyled } from './styled/FooterStyled'


export default function Footer() {
  return (
    <FooterStyled>
      <div>Zuri<span></span>Internship</div>
      <div>HNG Internship 9 Frontend Task</div>
      <div><img src={logo2} alt="" /></div>
    </FooterStyled>
  )
}
