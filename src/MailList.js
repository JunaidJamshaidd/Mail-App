import React, { useState } from 'react'
import "./MailList.css"
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmailRow from './EmailRow';
function MailList() {
    const [selectedOption, setSelectedOption] = useState("Primary");

    const handleOptionClick = (title) => {
      setSelectedOption(title);
    };
  return (
    <div className='mailList'>
        <div className="list_settings">
            <div className="settings_left">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
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
        <div className="list_sections">
            <Section Icon={InboxIcon} title="Primary" selected={selectedOption === "Primary"} onClick={() => handleOptionClick("Primary")} />
            <Section Icon={LocalOfferIcon} title="Promotions" selected={selectedOption === "Promotions"} onClick={() => handleOptionClick("Promotions")}   />
            <Section Icon={PeopleAltIcon} title="Social" selected={selectedOption === "Social"} onClick={() => handleOptionClick("Social")} />
        </div>

        <div className="list_mail">
            <EmailRow 
             title="Email"
             subject="First Email"
             description="This is a test"
             time="4:20 pm"/>
             <EmailRow 
             title="Email"
             subject="First Email"
             description="This is a test"
             time="4:20 pm"/>
        </div>
    </div>
  )
}

export default MailList