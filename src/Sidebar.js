import React, { useState } from 'react'
import "./Sidebar.css"
import { Button } from '@material-ui/core'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import DescriptionIcon from '@mui/icons-material/Description';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
    const [selectedOption, setSelectedOption] = useState("Inbox");
    const dispatch = useDispatch();

    const handleOptionClick = (title) => {
      setSelectedOption(title);
    };
  return (
    <div className='sidebar'> 
    <Button onClick={() => dispatch(openSendMessage())} startIcon={<EditOutlinedIcon />}className='sidebar_compose'>Compose</Button>
    
    <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={selectedOption === "Inbox"} onClick={() => handleOptionClick("Inbox")}/>
    <SidebarOption Icon={StarIcon} title="Starred" number={10} selected={selectedOption === "Starred"} onClick={() => handleOptionClick("Starred")}/>
    <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={5} selected={selectedOption === "Snoozed"} onClick={() => handleOptionClick("Snoozed")}/>
    <SidebarOption Icon={SendIcon} title="Send" number={69} selected={selectedOption === "Send"} onClick={() => handleOptionClick("Send")}/>
    <SidebarOption Icon={DescriptionIcon} title="Draft" number={69} selected={selectedOption === "Draft"} onClick={() => handleOptionClick("Draft")}/>
    
    </div>
  )
}

export default Sidebar