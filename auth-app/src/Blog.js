import React, { useEffect, useReducer } from "react";
import { db } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function reducer(state, action) {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "content":
      return { ...state, content: action.payload };
    case "date":
      return { ...state, date: action.payload };
    case "author":
      return { ...state, author: action.payload };
    case "blogs":
      return { ...state, blogs: action.payload };
    case "getBlog":
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content,
        date: action.payload.date,
        author: action.payload.author,
      };
    default:
      return state;
  }
}

const Blog = () => {
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    content: "",
    date: "",
    author: "",
    blogs: [],
  });

  async function handleSubmit() {
    const uid = uuidv4();
    // this used for setting new docs in collection
    await setDoc(doc(db, "blogs", uid), {
      title: state.title,
      content: state.content,
      date: state.date,
      author: state.author,
    });
    getBlogs();
    alert("blog added successfully");
  }

  async function getBlog(id) {
    const result = await getDoc(
      doc(db, "blogs", "279465c1-eb82-449d-9d34-2e86aebf0f5f")
    );
    console.log(result.data());
    dispatch({ type: "getBlog", payload: result.data() });
  }

  async function deleteBlog(id) {
    const result = await deleteDoc(
      doc(db, "blogs", "14977546-8346-4cf9-8fff-9b2ddd75241e")
    );
    console.log(result);
    getBlogs();
  }

  async function getBlogs() {
    const result = await getDocs(collection(db, "blogs"));
    const blog = [];
    result.forEach((doc) => {
      blog.push(doc.data());
    });

    dispatch({ type: "blogs", payload: blog });
  }

  async function updateBlog() {
    const result = await updateDoc(
      doc(db, "blogs", "279465c1-eb82-449d-9d34-2e86aebf0f5f"),
      {
        title: state.title,
        content: state.content,
        date: state.date,
        author: state.author,
      }
    );
    getBlogs();

    console.log(result);
    alert("blog updated successfully");
  }

  useEffect(() => {
    getBlogs();
    getBlog();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="title"
          value={state.title}
          onChange={(e) => {
            dispatch({ type: "title", payload: e.target.value });
          }}
        />
      </div>
      <div
        style={{
          margin: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="content"
          value={state.content}
          onChange={(e) => {
            dispatch({ type: "content", payload: e.target.value });
          }}
        />
      </div>
      <div
        style={{
          margin: "1rem",
        }}
      >
        <input
          type="date"
          placeholder="title"
          value={state.date}
          onChange={(e) => {
            dispatch({ type: "date", payload: e.target.value });
          }}
        />
      </div>
      <div
        style={{
          margin: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="author"
          value={state.author}
          onChange={(e) => {
            dispatch({ type: "author", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <button onClick={updateBlog}>Submit</button>
      </div>

      <div>
        {state.blogs.map((blog, index) => {
          return (
            <div key={index}>
              <p>title : {blog.title}</p>
              <p>content : {blog.content}</p>
              <p>date : {blog.date}</p>
              <p>author : {blog.author}</p>
              <button
                onClick={(e) => {
                  deleteBlog("14977546-8346-4cf9-8fff-9b2ddd75241e");
                }}
              >
                deleteBlog
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
