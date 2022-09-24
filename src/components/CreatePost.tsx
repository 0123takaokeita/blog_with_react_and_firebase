import React, {useEffect, useState} from "react";
import './CreatePost.css';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }: {isAuth: boolean}) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, 'posts'), {
      title: title,
      text: text,
      author: {
        userName: auth.currentUser?.displayName,
        id: auth.currentUser?.uid
      }
    })
    navigate('/')
  }

  useEffect(() => {
    if(!isAuth) navigate('/login')
  },[])

  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        <h1>New Post</h1>
        <label>Title</label>
        <input type='text' onChange={(e) => setTitle(e.target.value)} />
        <label>Content</label>
        <textarea onChange={(e) => setText(e.target.value)} />
        <button className="postButton" onClick={createPost}>Send</button>
      </div>
    </div>
  )
};

export default CreatePost;
