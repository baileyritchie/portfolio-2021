import React from 'react';
import './Projects.css';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

export default function Projects() {
  const getProjects = gql`
  query {
    projectCollection {
      items{
        title
        miniDescription
        slug,
        projectimage {
          title,
          url
        }
      }
    }
  }
  `;
  const {loading,data,error}  = useQuery(getProjects);
  
  return (
    <div className="projects-page">
      <h1 className="projectpage-header">Projects</h1>
      <div className="projects-container">
        {loading? <Loading/> : error ? <Error message={error.message} /> : (
          data.projectCollection.items.map((project,idx) => (
            <a className="post-container" href={`/projects/${project.slug}`}>
              <div className="featured-post" key={idx}>
                <img className="post-image" src={project.projectimage.url} alt={project.projectimage.title}></img>
              </div>
              <div className="post-description">{project.title}</div>
              <div className="post-detailed">{project.miniDescription}</div>
            </a>
            )
          )
         )}
        </div>
    </div>
  )
}
