import React, {useState} from "react";
import './CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const createPost = () => {
    console.warn('title:' + title)
    console.warn('text:' + text)
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
