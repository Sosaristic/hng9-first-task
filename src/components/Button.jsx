import React from 'react'
import { LinkStyled } from './styled/LinkStyled'

export default function Button({id, url, linkName}) {
  return (
    <LinkStyled id={id} href={url}>{linkName}</LinkStyled>
  )
}
