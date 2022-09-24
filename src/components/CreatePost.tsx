import React, {useState} from "react";
import './CreatePost.css';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
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

  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        <h1>記事を投稿する</h1>
        <label>タイトル</label>
        <input type='text' onChange={(e) => setTitle(e.target.value)} />
        <label>本文</label>
        <textarea onChange={(e) => setText(e.target.value)} />
        <button className="postButton" onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
};

export default CreatePost;
