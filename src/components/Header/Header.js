import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import DataUsageRoundedIcon from '@material-ui/icons/DataUsageRounded';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import "./Header.css";
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { logout } from '../../features/userSlice';
import { Link } from "react-router-dom";

const Header = () => {

  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })   
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
        <div className="logo-container">
          <Link to="/">
            <img src="https://th.bing.com/th/id/OIP.v4acunrmbnRxRGgfH-l5aAEsCW?w=350&h=175&c=7&o=5&dpr=1.25&pid=1.7"
             className="logo" />
          </Link>
        </div>
        <div className={click ? "nav-options active" : "nav-options"}>
          <div className="header__right">
          <Link to="/Covid">
              <HeaderOption Icon={EqualizerOutlinedIcon} title='Statistics' 
                onClick={closeMobileMenu}/>
          </Link>
          <Link to="/Resources">
              <HeaderOption Icon={DataUsageRoundedIcon} title='Resources' 
                onClick={closeMobileMenu}/>
          </Link>
          {/* <Link to="/Donate">
              <HeaderOption Icon={AddAlertIcon} title='Donate' 
                onClick={closeMobileMenu}/>
          </Link>  */}
          <Link to="/Help">
              <HeaderOption Icon={AssignmentReturnedIcon} title='Help' 
                onClick={closeMobileMenu}/>
          </Link>
              <HeaderOption avatar={true} title='Me' 
                onClick={signOut}/>
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
