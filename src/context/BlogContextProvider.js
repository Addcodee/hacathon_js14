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
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case BLOG.GET_BLOGS:
      return { ...state, blogs: action.payload };
    case BLOG.GET_BLOGS_ARTICLE:
      return { ...state, blogsArticle: action.payload };
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

  const values = { addBlog, getBlogs, blogs: state.blogs };
  return (
    <blogContext.Provider value={values}>
      {children}
    </blogContext.Provider>
  );
};

export default BlogContextProvider;
