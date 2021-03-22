import React from 'react';
import './Blog.css';
import {processImage,processPostBody,processSubtitle,processTitle} from '../../Contentful/useContentfulBlog';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {useParams} from 'react-router-dom';

const getPostBySlug = gql`
query ($slug: String!) {
  blogPostCollection (where: {slug:$slug}) {
    items {
      created,
      image {
        title
        url  
      },
      title,
      body {
        json
      }
    }
  }
}`;

export default function Blog() {
  const {slug} = useParams();
  const {loading,data,error} = useQuery(getPostBySlug, {
    variables: {slug}
  });

  if (loading) {
    return <div>Loading</div>
  }
  if (data) {
    let post = data.blogPostCollection.items[0];
    let {title,created,body,image} = post;
    return (
      <div className="blogpage-container">
        <div className="blog--container">
          {processTitle(title)}
          {processSubtitle(created)}
          {processImage(image)}
          {processPostBody(body.json)}
        </div>
      </div>
      
    )
  }
  
  return <div>dkaskasmdkasdmsa</div>

  
}

