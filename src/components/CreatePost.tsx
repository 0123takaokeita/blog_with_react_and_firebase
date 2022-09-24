import React from "react";
import './CreatePost.css';

const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        <h1>記事を投稿する</h1>
        <label>タイトル</label>
        <input type='text' />
        <label>本文</label>
        <textarea />
        <button className="postButton">投稿する</button>
      </div>
    </div>
  )
};

export default CreatePost;
