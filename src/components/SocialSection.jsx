import React from 'react'
import slackLogo from "./images/slack.png"
import githublogo from "./images/github-logo.png"
import { SocialStyled } from './styled/SocialStyled'

export default function SocialSection() {
  return (
<SocialStyled>      
      <div><img src={slackLogo} alt="" /></div>
      <div><img src={githublogo} alt="" /></div>
      
      </SocialStyled>
  )
}
