import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BLOCKS,MARKS,INLINES} from "@contentful/rich-text-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import '../Components/Project/Project.css';

const Text = ({children}) => <p className="project--paragraph">{children}</p>;
const HeadingLarge = ({children}) => <h1 className="project--heading-large">{children}</h1>;
const Heading = ({children}) => <h1 className="project--heading">{children}</h1>;
const Italic = ({children}) => <p className="italics">{children}</p>;

const Blockqoute = ({children}) => {
  return (
    <div className="project--blockquote-wrapper">
      <div className="project--blockquote">
        <p>{children}</p>
      </div>
    </div>
    
  );
};  

const CodeComponent = ({children}) => {
  return (
    <div className="project--code-container">
      <SyntaxHighlighter language="javascript" style={monoBlue}>
      {children}
    </SyntaxHighlighter>
    </div>
    
  )
}

// process post title
const processTitle = (title) => {
  return <h1 className="project--title">{title}</h1>;
}
// process post subtitle (where the date goes)
const processSubtitle = (created) => {
  return <h1 className="project--subtitle"> {created} </h1>
}
// process post image
const processImage = ({title,url}) => {
  return <img src={url} alt={title} className="project--image"/>
}
// process post body
const processPostBody = (body) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <p className="bold">{text}</p>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
      [MARKS.CODE]: text => <CodeComponent>{text}</CodeComponent>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node,children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node,children) => <HeadingLarge>{children}</HeadingLarge>,
      [BLOCKS.HEADING_2] : (node,children) => <Heading>{children}</Heading>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="project--list">{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="project--list-item">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => <Blockqoute>{children}</Blockqoute>,
      [INLINES.ENTRY_HYPERLINK]: (node,children) => <a href={node.data.uri} className="blog-link" >{children}</a>,
      [INLINES.HYPERLINK]: (node,children) => <a href={node.data.uri} className="blog-link" >{children}</a>,
      
    }
  };
  return <div className="project--body">
    {documentToReactComponents(body,options)}
  </div>;
}

export {processTitle,processImage,processPostBody,processSubtitle};
