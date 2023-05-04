import React from "react";
import PostItem from "../PostItem/PostItem";

function PostList({ posts, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post,index) => (
        <PostItem post={post} number={index +1}key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
