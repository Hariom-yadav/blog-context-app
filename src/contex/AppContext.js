import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"

export const AppContext = createContext();

 function AppContextProvider ( {children}){
    const [loding , setLoding] = useState(false);
    const [posts , setPosts] = useState([]);
    const [page , setPage ] = useState(1);
    const [totalpage , setTotalPage] = useState(null);

 // data Filling
    const fetchBlogPosts = async (page = 1) =>
    {

        setLoding(true)
        let url=`${baseUrl}?page=${page}`;
        

        try{
            const result = await fetch(url);
            const data = await result.json();
            
            if (!data.posts || data.posts.length === 0)
                throw new Error("Something Went Wrong");
              console.log("Api Response", data);
            
            setLoding(data.loding);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalpage);
                
        }
        catch(e){

            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }

        setLoding(false);
    }

        const handlePageChange = (page) => {
            setPage(page);
            fetchBlogPosts(page);
        }

    const value ={
        loding,
        setLoding,
        posts,
        setPosts,
        page,
        setPage,
        totalpage,
        setTotalPage,
        fetchBlogPosts,
        handlePageChange
    }

    return <AppContext.Provider value = {value}>{children}</AppContext.Provider>;
}
export default AppContextProvider;