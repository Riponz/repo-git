import React from 'react'
import "./Post.css"

function Post(details) {
    {console.log(details.details.name)}
    const post = details.details;
  return (
      <div className='Post'>
          <div class="main">
              <div>
   <div class="title">{post.name}</div> 
   <a href={`${post.html_url}`} target="_blank" class="myButton">github</a>
   </div>
   
   
   <div class="detail">
       <div class="base">
           <div class="details">👤: {post.owner.login}</div>
           <div class="details">⭐:{post.watchers}</div>
           <div class="details">🍴:{post.forks}</div>
           
       </div>
       <div class="desc">description: {post.description}</div>
   </div>


</div>
      </div>
  )
}

export default Post