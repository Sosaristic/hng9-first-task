import React from "react";
import { LinkStyled } from "./styled/LinkStyled";

export default function Button({ id, url, linkName, title }) {
  return (
    <LinkStyled id={id} href={url} title={title}>
      {linkName}
    </LinkStyled>
  );
}
