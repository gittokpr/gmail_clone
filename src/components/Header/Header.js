import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://www.flaticon.com/svg/vstatic/svg/270/270021.svg?token=exp=1610450267~hmac=011bb3bedcb182ec23a6129ae861a26c" alt="G Mail" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Serach Mail" />
                <ArrowDropDownIcon />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>

    )
}

export default Header;
