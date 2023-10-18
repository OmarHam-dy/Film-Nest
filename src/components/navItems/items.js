import React from "react";
// props
function NavItem(props) {
  return (
    <>
      <li>
        <a href={props.path}>
         {props.name}
        </a>
      </li>
    </>
  );
}

export default NavItem;
