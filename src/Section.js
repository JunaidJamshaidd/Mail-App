import React from 'react'
import "./Section.css"
function Section({Icon, title, selected, onClick}) {
  return <div className={`section ${selected && "section--selected"}`} onClick={onClick}
    >
        <Icon/>
        <h4>{title}</h4>
    </div>;
  
}

export default Section;