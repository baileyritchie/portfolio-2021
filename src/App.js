
import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {navElements} from './NavData';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import Writing from './Components/Writing/Writing';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Now from './Components/Now/Now';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import NotFound from './Components/NotFound/NotFound';

const {REACT_APP_SPACE_ID : SPACE_ID, REACT_APP_CDA_TOKEN : TOKEN} = process.env;
function App() {
  let navLinks = navElements();
  const apClient = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/1234?access_token=${TOKEN}`
  });
  return (
    <ApolloProvider client={apClient}>
      <Router >
      <Navbar logoName="bailey ritchie" navData={navLinks}  />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blog" exact component={Writing}></Route>
          <Route path="/blog/:slug" component={Blog}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/projects" exact component={Projects}></Route>
          <Route path="/now" component={Now}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/projects/:slug" component={Project}></Route>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
