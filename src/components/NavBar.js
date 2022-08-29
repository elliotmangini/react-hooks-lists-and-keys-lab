import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksAsJsx = links.map(link => {
    return (
      <a href={'#' + link} key={link}>{link}</a>
    )
  })

  return <nav>{linksAsJsx}</nav>;
}

export default NavBar;
