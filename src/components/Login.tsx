import React from "react";
import { signInWithPopup} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';

type loginProps = {
  setIsAuth: React.Dispatch<React.SetStateAction<string | null>>
}

const Login = ({ setIsAuth }: loginProps ) => {
  const navigate = useNavigate();

  const loginwWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(()=> {
      localStorage.setItem('isAuth', 'true')
      setIsAuth('true')
      navigate('/');
    }).catch((error) => {
      console.error('error', error)
    });
};

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginwWithGoogle} >Google</button>
    </div>
  )
};

export default Login;
