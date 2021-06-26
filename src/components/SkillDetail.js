import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const SkillDetail = ({ skill }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "skills"}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(height: 80)
            }
          }
        }
      }
    }
  `);

  const image = data.allFile.edges
    .filter(({ node }) => node.relativePath === skill.imageUrl)[0]
    .node.childImageSharp.gatsbyImageData;

  return (
    <div className="bg-white border border-gray-300">
      <div className="p-8 text-center">
        <GatsbyImage className="mb-4 mx-auto" image={image} alt={`${skill.title} logo`} />
        <h3 className="mb-2 text-xl font-bold">{skill.title}</h3>
        <p>{skill.description}</p>
      </div>
    </div>
  )
};

export default SkillDetail;
