import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Preview } from "@mui/icons-material";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function InputArea(props) {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  function handlePost(event) {
    const { value, name } = event.target;

    setPost((preValue) => {
      if (name === "title") {
        return {
          title: value,
          content: preValue.content,
        };
      } else if (name === "content") {
        return {
          title: preValue.title,
          content: value,
        };
      }
    });
  }

  // console.log(post);
  return (
    <div className="textbox shadow-xl">
      <form>
        <input
          onChange={handlePost}
          placeholder="Title"
          name="title"
          className="focus:outline-purple-100 my-8 ml-8 p-3 flex..."
        />
        <textarea
          onChange={handlePost}
          name="content"
          placeholder="Content"
          style={{ resize: "none" }}
          className="focus:outline-purple-100 ml-8 p-3 flex ..."
          rows={7}
          cols={82}
        />

        <button
          onClick={(event) => {
            props.btn(post);
            event.preventDefault();
          }}
          className="font-bold mt-14 ml-8 mb-7 py-1 px-2 bg-emerald-200 hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-100"
          type="submit"
        >
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default InputArea;
