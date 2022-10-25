import React from 'react'
import { ProfileStyled } from './styled/ProfileStyled'
import ProfilePhoto from './images/profile.png'
export default function Profile() {
  return (
    <ProfileStyled>
        <div className="img"><img src={ProfilePhoto} alt="profile img"/></div>
    </ProfileStyled>
  )
}
