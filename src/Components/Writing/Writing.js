// component for writing page
import React from 'react';
import './Writing.css';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const getPosts = gql`query {
    blogPostCollection {
      items{
        created
        tags,
        title,
        slug,
        body {
          json
        }
      }
    }
  }
`;
export default function Writing() {
  const {loading,data,error} = useQuery(getPosts);
  return (
    <div className="writing-page">
      <div className="writing-container">
      <div className="writing-header"> Posts
      </div>
      {loading ? <Loading/> : error ? <Error message={error.message}/> : (
      <ul className="writing-posts-container">
        {data.blogPostCollection.items.map((post) => {
          return (
            <a className="writing-post" href={`/blog/${post.slug}`}>
              <p className="writing-post-tag">{post.tags.map((tag,idx) => {
                if (idx !== post.tags.length - 1) {
                  return `${tag} • `
                } else {
                  return tag;
                }
              })}</p>
              <h2 className="writing-post-title">{post.title}</h2>
              <p className="writing-post-date">{post.created.substring(0,10)}</p>
              <p className="writing-post-descrip">{post.body.json.content[0].content[0].value.substring(0,120)}...</p>
            </a>
          )
        })}
        
      </ul>)}
      </div>
    </div>
  )
}
