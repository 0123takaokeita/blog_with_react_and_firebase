import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const houseIcon = <FontAwesomeIcon icon={faHouse} />
const fileIcon = <FontAwesomeIcon icon={faFilePen} />
const rightIcon = <FontAwesomeIcon icon={faArrowRightToBracket} />

const Navbar = ( { isAuth }: {isAuth: boolean}) => {
  return (
      <nav>
        <Link to='/'>{ houseIcon }Home</Link>
        <Link to='/createpost'>{ fileIcon }CreatePost</Link>
        { isAuth ? (
          <Link to='/logout'>{ rightIcon }Logout</Link>
        ) : (
          <Link to='/login'>{ rightIcon }Login</Link>
        )}
      </nav>
  )
};

export default Navbar;
