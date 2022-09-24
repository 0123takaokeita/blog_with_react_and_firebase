import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

type loginProps = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Logout = ({ setIsAuth }: loginProps ) => {
  const navigate = useNavigate();

  const logoutwWithGoogle = () => {
    signOut(auth)
    .then(() => {
      console.warn('success!!')
      localStorage.clear()
      setIsAuth(false)
      navigate("/login")
    }) .catch((error) => {
      console.error('error', error)
    });
};

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logoutwWithGoogle} >ログアウト</button>
    </div>
  )
};

export default Logout;
