import React, { ReactElement} from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';

type Docs = {
  id: string,
  title: string,
  text: string,
  author: { id: string, userName: string }
}[]

const Home = (): ReactElement => {
  const [postList, setPostList] = useState<Docs>([])
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"))
      const docs: Docs = []
      data.docs.forEach((doc) => {
        docs.push({
          id: doc.id,
          title: doc.data().title,
          text: doc.data().text,
          author: { id: doc.data().author.id, userName: doc.data().author.userName }
        })
      })
      setPostList(docs)
    }
    getPosts()
  }, [])


  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "posts", id))
    window.location.href = '/'
  }

  return (
    <div className="homePage">
      {postList.map((doc, i) => {
        return (
          <div key={i} className="postContents">
            <div className="postHeader">
              <h1>{doc.title}</h1>
            </div>
            <div className="postTextContainer">
              {doc.text.repeat(100)}
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{doc.author.userName}</h3>
              { (doc.author.id === auth.currentUser?.uid) && (
                <button onClick={() => handleDelete(doc.id)}>Delete</button>
              ) }
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Home;
