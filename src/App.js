import React, { Component } from "react";
import "./App.css";
import NewPost from "./Components/page/NewPost";


const post = {
  title: "My First Post",
  author: "Lisa",
  body: "This is my first post.",
  comments: [
    "First!",
    "Great post",
    "Hire her"
  ]
}

function App() {
  return (
    <>
    <h1>Test</h1>
      <NewPost 
        title={post.title}
        author={post.author}
        body={post.body}
        comments={post.comments}
        />
    </>
  );
}

export default App;
