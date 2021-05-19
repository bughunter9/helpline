import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import DataUsageRoundedIcon from '@material-ui/icons/DataUsageRounded';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import "./Header.css";
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from '../features/userSlice';
import './Header.css';

const Header = () => {

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
        <div className="logo-container">
          <a href="#">
            <img src="https://th.bing.com/th/id/OIP.v4acunrmbnRxRGgfH-l5aAEsCW?w=350&h=175&c=7&o=5&dpr=1.25&pid=1.7"
             className="logo" />
          </a>
        </div>
        <div className={click ? "nav-options active" : "nav-options"}>
          <div className="header__right">
              <HeaderOption Icon={EqualizerOutlinedIcon} title='Statistics' 
                onClick={closeMobileMenu}/>
              <HeaderOption Icon={DataUsageRoundedIcon} title='Resources' 
                onClick={closeMobileMenu}/>
              <HeaderOption Icon={AddAlertIcon} title='Donate' 
                onClick={closeMobileMenu}/>
              <HeaderOption Icon={AssignmentReturnedIcon} title='Help' 
                onClick={closeMobileMenu}/>
              <HeaderOption avatar={true} title='Me' 
                onClick={logoutOfApp} onClick={closeMobileMenu}/>
          </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
