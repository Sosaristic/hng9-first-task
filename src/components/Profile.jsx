import React from 'react'
import { ProfileStyled } from './styled/ProfileStyled'
import ProfilePhoto from './images/profile.png'
export default function Profile() {
  return (
    <ProfileStyled>
        <div className="img"><img id='profile_img' src={ProfilePhoto} alt="profile img"/></div>
        <div id="twitter">Omena Sunday</div>
    </ProfileStyled>
  )
}
