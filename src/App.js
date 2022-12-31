import React, { useState } from "react";
import Navbar from "./components/Navbar";
import InputArea from "./components/InputArea";
import Cards from "./components/Cards";
function App() {
  const [blog, setBlog] = useState([]);

  function handleBtn(newPost) {
    setBlog((preVal) => {
      return [...preVal, newPost];
    });
    
  }
  // console.log(blog);
  console.log(blog);
  return (
    <div className="App">
      <Navbar />
      <InputArea btn={handleBtn} />
      {blog.map((post) => {
        return <Cards title={post.title} content={post.content} />;
      })}
    </div>
  );
}

export default App;
