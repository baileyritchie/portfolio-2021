import React from 'react'
import './Home.css';
import Link from '../Link/Link'
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const getBlogPosts = gql`query {
  blogPostCollection {
    items{
      image, {
        url
        title
      },
      title,
      slug,
    }
  }
}
`;

export default function Home() {
  const {loading,data,error} = useQuery(getBlogPosts);
  return (
    <div className="home-container">
      <div className="home-intro">
        <h2 className="home-intro-name">hey i'm bailey &</h2>
        <h1 className="home-intro-title">I build websites.</h1>
        <p className="home-intro-descrip">I am a self-taught, full-stack developer mostly working with JavaScript. 
          I share my writing on my <Link url="/writing" title="blog"/> and my other thoughts on <Link url="www.twitter.com/baileylritchie" title="twitter"/>.
        </p>
      </div>
      <div className="home-featured-posts-container">
        <div className="home-featured-posts-title">
          Featured Posts
        </div>
        {loading ? <div className="featured-posts-loading">Loading Featured Posts</div> : (
          <ul className="home-featured-posts">
          {data.blogPostCollection.items.map((post) => {
              return (
                <a href={`/blog/${post.slug}`}className="featured-post" >
                  <img className="post-image" src={post.image.url} alt={post.image.title}></img>
                  <p className="post-descrip">{post.title}</p>
                </a>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
