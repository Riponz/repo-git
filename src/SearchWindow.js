import React from 'react'
import './SearchWindow.css'
import Post from './components/Post';
import { useState, useEffect } from "react";
import Pagination from './components/Pagination';

function SearchWindow() {
const [posts, setposts] = useState([]);
const [query, setquery] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

function handleSubmit(e) {
  e.preventDefault();
  searchRepos();
}

function searchRepos() {
  fetch(`https://api.github.com/search/repositories?q=${query}`)
  .then(res => res.json())
  .then(data => { setposts(data.items);
})
}

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='header'>
        <h1>GitRep</h1>
        <form className='search'>
      <div className='input'>
        <input type="text" value={query} name="" placeholder='Enter language' onChange={e => setquery(e.target.value) } />
        </div>
      <button type="submit" className='btn' onClick={handleSubmit}>search</button>
      </form>
      </div>

      {currentPosts.map(post => (
       <div className='row' key={post.id}>
         <Post details={post}/>
         </div>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default SearchWindow
