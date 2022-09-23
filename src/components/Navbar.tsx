import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const houseIcon = <FontAwesomeIcon icon={faHouse} />
const fileIcon = <FontAwesomeIcon icon={faFilePen} />
const rightIcon = <FontAwesomeIcon icon={faArrowRightToBracket} />

const Navbar = () => {
  return (
      <nav>
        <Link to='/'>{ houseIcon }Home</Link>
        <Link to='/createpost'>{ fileIcon }CreatePost</Link>
        <Link to='/login'>{ rightIcon }Login</Link>
      </nav>
  )
};

export default Navbar;
