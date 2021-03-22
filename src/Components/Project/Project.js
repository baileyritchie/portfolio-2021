/* template for a single project */
import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {useParams} from 'react-router-dom';
import './Project.css';
import {processImage,processPostBody,processSubtitle,processTitle} from '../../Contentful/useContentfulProject';
import Error from '../Error/Error';

/* TODO modify the query for projectCollection */ 

const getProjectBySlug = gql`
query ($slug:String!){
	projectCollection(where: {slug: $slug}) { 
    items {
      title,
    miniDescription,
    projectimage {
      title
      url
    },
    body {
      json
    },
    github,
    link
    }
	}
}
`;

export default function Project() {
  const {slug} = useParams();
  const {loading,data,error} = useQuery(getProjectBySlug, {
    variables: {slug}
  })
  let project;
  if (loading) {
    return <div>Loading</div>
  } 
  if (data) {
    project = data.projectCollection.items[0];
  }
  return !data ? (
    <div className='projectpage-container'>
      <div className="project-container">
        <Error message={error.message}/>
      </div>
    </div>
  ) : (  
    <div className='projectpage-container'>
    <div className="project-container">
      {processTitle(project.title)}
      {processSubtitle(project.miniDescription)}
      {processImage(project.projectimage)}
      <div className="project-link-container">
        <a className="project-link" href={project.github}>View Github</a>
        <a className="project-link" href={project.link}>View Website</a>
      </div>
      {processPostBody(project.body.json)}
    </div>
    </div>
  )
}
