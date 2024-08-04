import React from 'react';
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected, onClick }) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`} onClick={onClick}>
        <Icon />
        <h4>{title}</h4>
        <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
