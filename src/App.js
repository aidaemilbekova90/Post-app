import { useState } from "react";


import "./App.css";

import PostItem from "./Components/PostItem/PostItem";
import PostList from "./Components/PostList/PostList";

import PostForm from "./Components/postForm/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "Javascript-язык программирования",
    },
    {
      id: 2,
      title: "PHP",
      body: "PHP-язык программирования",
    },
    {
      id: 3,
      title: "SQL",
      body: "SQL-язык программирования",
    },
  ]);
 
  const [post, setPost] = useState({id:Date.now(),title:"",body:""});

 
 const createPost=(newPost)=>{
setPosts([...posts,newPost])
 }
  return (
    <div className="App">
    <PostForm create={createPost}/>
      <PostList posts={posts} title="Список постов про JS" />
    
    </div>
  );
}

export default App;
