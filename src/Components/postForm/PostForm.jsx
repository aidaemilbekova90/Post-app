import React from "react";
// import MyButton from "./Components/UI/Button/MyButton";
import MyInput from "../UI/Input/Input";
import MyButton from "../UI/Button/MyButton";
import { useState } from "react";

function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...post,
    };

    create(newPost);

    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <MyInput
        type="text"
        value={post.title}
        placeholder="Название поста"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <MyInput
        value={post.body}
        type="text"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="описание поста"
      />

      <MyButton onClick={addNewPost}>создать пост</MyButton>
    </form>
  );
}

export default PostForm;
