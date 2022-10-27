import React from 'react'
import { Container } from './styled/Container'
import slackLogo from "./images/slack.png"
import logo2 from "./images/I4G.png"
import { SocialStyled } from './styled/SocialStyled'

export default function SocialSection() {
  return (
<SocialStyled>      
      <div><img src={slackLogo} alt="" /></div>
      
      </SocialStyled>
  )
}
