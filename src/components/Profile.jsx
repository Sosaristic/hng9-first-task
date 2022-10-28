import React from 'react'
import {RiShareForwardLine} from "react-icons/ri"
import {FaEllipsisH} from "react-icons/fa"
import { ProfileStyled } from './styled/ProfileStyled'
import ProfilePhoto from './images/profile.png'
export default function Profile() {
  return (
    <ProfileStyled>
      <div className="shareicon share"><RiShareForwardLine color='#9ea8b8' size={24}/></div>
      <div className="shareicon ellipse"><FaEllipsisH color='#9ea8b8' size={24}/></div>

        <div className="img"></div>
        <div id="twitter">Omena Sunday</div>
    </ProfileStyled>
  )
}
