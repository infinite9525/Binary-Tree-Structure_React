import React from 'react';

type Props = {
  familyTree: TreeType[];
};

const BinaryTree: React.FC<Props> = ({ familyTree }) => {
  return (
    <ul>
      {familyTree.map((node, index: number) => (
        <li key={index}>
          <a href={node.link}>
            <img src={node.image} />
            <span>{node.name}</span>
          </a>
          {node.children && <BinaryTree familyTree={node.children} />}
        </li>
      ))}
    </ul>
  );
};

export default BinaryTree;
