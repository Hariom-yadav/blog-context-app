import {Header} from  "./components/Header"
import { Blogs  } from "./components/Blogs"
import { Pagination } from "./components/Pagination"
import React, { useContext, useEffect } from "react"
import { AppContext } from "./contex/AppContext"
import './App.css'


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts();
  },[]);

  return (
    <div>
        <Header/>

        <Blogs/>

        <Pagination/>

    </div>

  )
}
