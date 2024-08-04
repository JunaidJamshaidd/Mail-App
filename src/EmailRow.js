import React, { useState } from 'react';
import "./EmailRow.css"
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import { Checkbox, IconButton } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
function EmailRow({id,title, subject, description, time}) {
    const [isFilled, setIsFilled] = useState(false);

  const handleStarClick = () => {
    setIsFilled(!isFilled);
  };

  const navigate = useNavigate();

  return (
    <div className='emailRow'>
        <div className="row_options">
        <Checkbox size="small"style={{ color: '#d4d9de' }}/>
            <div className="star"onClick={handleStarClick}>
            <IconButton> 
             {isFilled ? <StarIcon style={{ color: '#f3c74b' }}/> : <StarBorderOutlinedIcon  />}
             </IconButton>
            </div>
        </div>
        <div onClick={()=> navigate("/mail")}className="gotoMail">
        <h3 className="row_title">{title}</h3>

        <div className="row_message">
        <h4 className="row_subject">
            {subject}{" "}
            <span className='row_description'>
            - {" "}{description}
        </span>
        </h4>
        
        </div>
        <p className="row_time">
            {time}
        </p>
    </div>
    </div>
  )
}

export default EmailRow