import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <div className='header'>
      <div className="header_left">
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />
      
      <div className="search_section">
      <IconButton>
        <SearchIcon/>
        </IconButton> 
        <input placeholder='Search mail' type='text'/>
        <IconButton>
        <TuneIcon/>
        </IconButton>
      </div>
      </div>
      <div className="header_right">
      <IconButton>
        <SettingsIcon/>
      </IconButton>
      <IconButton>
        <AppsIcon/>
      </IconButton> 
      <IconButton>
      <Avatar/>
      </IconButton>
      </div>
    </div>
  )
}

export default Header