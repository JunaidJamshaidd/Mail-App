import React, { useState } from 'react'
import "./Mail.css"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { IconButton } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import ShortcutIcon from '@mui/icons-material/Shortcut';

function Mail() {
  const navigate = useNavigate();
  const [isFilled, setIsFilled] = useState(false);
  const handleStarClick = () => {
    setIsFilled(!isFilled);
  };
  return (
    <div className='mail'>
      <div className="settings">
        <div className="settings_left">
            <IconButton onClick={()=> navigate("/")}>
              <ArrowBackOutlinedIcon/>
            </IconButton>
            <IconButton>
              <ArchiveOutlinedIcon/>
            </IconButton>
            <IconButton>
              <ReportGmailerrorredIcon/>
            </IconButton>
            <IconButton>
              <DeleteOutlineIcon/>
            </IconButton>
        <div className="divider"></div>
            <IconButton>
              <MarkEmailUnreadOutlinedIcon/>
            </IconButton>
            <IconButton>
              <DriveFileMoveOutlinedIcon/>
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon/>
            </IconButton>

        </div>
        <div className="settings_right">
        <IconButton>
          <KeyboardArrowLeftIcon/>
        </IconButton>
        <IconButton>
          <KeyboardArrowRightIcon/>
        </IconButton>
        <IconButton>
          <KeyboardIcon/>
        </IconButton>    
          
        </div>
      </div>

      <div className="mail_header">
        <div className="mail_headerLeft">
          <h2>Subject</h2>
        </div>
        <div className="mail_headerRight">
          <IconButton>
          <LocalPrintshopOutlinedIcon/>  
          </IconButton>  
          <IconButton>
          <OpenInNewOutlinedIcon/>
          </IconButton>      
        </div>
        
      </div>

      <div className="mail_actions">
        
        <div className="mail_actionsLeft">
        <Avatar/>
        <div className="author_info">
          <h4>email@gmail.com</h4>
          <span className='receiver'>to me <ArrowDropDownOutlinedIcon/></span>
        </div>
        </div>
        <div className="mail_actionsRight">
          <h4>12:00 pm</h4>
          <div className="fav"onClick={handleStarClick}>
            <IconButton> 
             {isFilled ? <StarIcon style={{ color: '#f3c74b' }}/> : <StarBorderOutlinedIcon  />}
             </IconButton>
            
            </div>
            <IconButton>
              <InsertEmoticonOutlinedIcon/>
              </IconButton>
              <IconButton>
                <UndoOutlinedIcon/>
                </IconButton>
                <IconButton>
                  <DeleteOutlineIcon/>
                  </IconButton>
            

        </div>

      </div>

      <div className="mail_body">
        <p>Hey, hope this email finds you well.</p>

        <div className="reply_buttons">
          <div className="button">
          <ShortcutIcon style={{transform: 'rotate(180deg)'}}/>
            Reply
          </div>
          <div className="button">
            <ShortcutIcon/>
            Forward
          </div>
          <div className="smile">
            <InsertEmoticonOutlinedIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mail