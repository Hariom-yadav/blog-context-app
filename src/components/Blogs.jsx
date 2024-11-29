import React, { useContext } from 'react'
import Spinner from './Spinner'  
import { AppContext } from '../contex/AppContext'
//import { Card } from './Card'

 export const Blogs = () => {

  const {posts,loading}=useContext(AppContext);
  return (
    <div className='flex flex-col gap-y-10 mt-20' >
         {  
            loading ? 
            <Spinner/> :
             (
                posts.length === 0 ?
                
                (<div>
                  <p>No posts are Found</p>
                </div>) :
                
                (posts.map (post => (
                  <div key={post.id} className='w-11/12 items-center max-w-2xl mx-auto' >
                      <p className='font-bold' >{post.title}</p>

                      <p>
                          By <span>{post.auther}</span> on <span>{post.category}</span>
                      </p>
                      <p>Posted on {post.date} </p>
                      <p>{post.content}</p>

                      <div>
                            {post.tags.map((tag,index) => {
                              return <span className='text-blue-700'
                              key={index}
                              >{`#${tag}`}</span>
                            })}
                      </div>
                  </div>
                ) ) )

             )

         } 

    </div>
  )
}
export default Blogs;