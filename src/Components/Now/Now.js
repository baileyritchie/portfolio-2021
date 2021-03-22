// component for writing page
import React from 'react';
import './Now.css';
import { gql, useQuery } from '@apollo/client';
import Loading from '../Loading/Loading';
const getNowPosts = gql`
query {
  nowCollection{
    items {
      title,
      date,
      body
    }
  }
}`;
export default function Now() {
  const {loading,data,error} = useQuery(getNowPosts);
  return (
    <div className="now-page">
      <div className="now-container">
      <div className="now-header"> Now
      </div>
      <div className ="now-subheader">Brief thoughts and progress reports on what I'm up to now...</div>
      {loading ? <Loading/> : (
          <ul className="now-posts-container">
          {data.nowCollection.items.map((post) => {
            return (
              <li className="now-post">
                <h2 className="now-post-title">{post.title}</h2>
                <p className="now-post-descrip"> {post.body}</p>
                <p className="now-post-date"> posted on {post.date.substring(0,10)}</p>
              </li>
            )
          })}
        </ul>
      )}
      </div>
    </div>
  )
}
