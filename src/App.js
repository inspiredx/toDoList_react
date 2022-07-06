import React, { useState } from "react";
import { useRef } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import ClassCounter from "./components/ClassCounter"
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {   
  const[posts, setPosts] = useState([
    ]); 


 
  const createPost = (newPost) => {
    setPosts([...posts, newPost])

  };


  //Получаем пост из дочернего компонента колбэком
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

 

    return (
    <div className="App">
     <PostForm create={createPost}/>
     <PostList remove={removePost} posts={posts} title={"Список задач"}/>
    </div>
  );
}

export default App;
