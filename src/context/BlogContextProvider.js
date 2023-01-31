import axios from "axios";
import React, {
  Children,
  createContext,
  useContext,
  useReducer,
} from "react";
import { API__BLOGS, BLOG } from "../helpers/variables";

export const blogContext = createContext();
export const useBlog = () => useContext(blogContext);

const INIT_STATE = {
  blogs: [],
  blogsArticle: {},
  favs: [],
  saves: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case BLOG.GET_BLOGS:
      return { ...state, blogs: action.payload };
    case BLOG.GET_BLOGS_ARTICLE:
      return { ...state, blogsArticle: action.payload };
    case BLOG.GET_FAVS:
      return { ...state, favs: action.payload };
    case BLOG.GET_SAVES:
      return { ...state, saves: action.payload };
    default:
      return state;
  }
}
const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //? addBlog

  async function addBlog(newBlog) {
    if (
      !newBlog.name ||
      !newBlog.desc ||
      !newBlog.theme ||
      !newBlog.img
    ) {
      alert("error");
      return;
    }
    await axios.post(API__BLOGS, newBlog);
  }

  //? getBlogs

  async function getBlogs() {
    const { data } = await axios(API__BLOGS);

    dispatch({
      type: BLOG.GET_BLOGS,
      payload: data,
    });
  }

  //! FAVS

  //? getFavs

  function getFavs() {
    let favs = JSON.parse(localStorage.getItem("favs"));

    if (!favs) {
      localStorage.setItem("favs", JSON.stringify({ posts: [] }));
    }

    dispatch({
      type: BLOG.GET_FAVS,
      payload: favs,
    });
  }

  //? addPostToFavs

  function addPostToFavs(post) {
    let favs = JSON.parse(localStorage.getItem("favs"));

    if (!favs) {
      favs = { posts: [] };
    }

    const findPost = favs.posts.filter((obj) => obj.id === post.id);

    if (findPost.length === 0) {
      favs.posts.push(post);
    } else {
      favs.posts = favs.posts.filter((obj) => obj.id != post.id);
    }

    localStorage.setItem("favs", JSON.stringify(favs));

    dispatch({
      type: BLOG.GET_FAVS,
      payload: favs,
    });
  }

  //? checkPostInFavs

  function checkPostInFavs(id) {
    let favs = JSON.parse(localStorage.getItem("favs"));

    if (favs) {
      let filtedPost = favs.posts.filter((obj) => obj.id === id);
      return filtedPost.length ? true : false;
    }
  }

  //! SAVES

  //? getSaves

  function getSaves() {
    let saves = JSON.parse(localStorage.getItem("saves"));

    if (!saves) {
      localStorage.setItem("saves", JSON.stringify({ posts: [] }));
    }

    dispatch({ type: BLOG.GET_SAVES, payload: saves });
  }

  //? addPostToSaves

  function addPostToSaves(post) {
    let saves = JSON.parse(localStorage.getItem("saves"));

    if (!saves) {
      saves = { posts: [] };
    }
    const findPost = saves.posts.filter((obj) => obj.id === post.id);

    if (findPost.length === 0) {
      saves.posts.push(post);
    } else {
      saves.posts = saves.posts.filter((obj) => obj.id !== post.id);
    }
    localStorage.setItem("saves", JSON.stringify(saves));

    dispatch({
      type: BLOG.GET_SAVES,
      payload: saves,
    });
  }

  //? checkPostInSaves

  function checkPostInSaves(id) {
    let saves = JSON.parse(localStorage.getItem("saves"));

    if (saves) {
      const filtedPost = saves.posts.filter((obj) => obj.id === id);
      return filtedPost.length ? true : false;
    }
  }

  const values = {
    addBlog,
    getBlogs,
    blogs: state.blogs,
    addPostToFavs,
    checkPostInFavs,
    getFavs,
    addPostToSaves,
    getSaves,
    checkPostInSaves,
  };
  return (
    <blogContext.Provider value={values}>
      {children}
    </blogContext.Provider>
  );
};

export default BlogContextProvider;
