

// // ProjectTag.tsx
// import React from 'react';

// const example:string = "example"
// const ProjectTag = ({ name, onClick, isSelected }:string) => (
//   <button
//     onClick={() => onClick(name)}
//     className={`px-4 py-2 rounded-full ${
//       isSelected ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
//     }`}
//   >
//     {name}
//   </button>
// );

// export default ProjectTag;








import React from 'react';

type ProjectTagProps = {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
};

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => (
  <button
    onClick={() => onClick(name)}
    className={`px-4 py-2 rounded-full ${
      isSelected ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
    }`}
  >
    {name}
  </button>
);

export default ProjectTag;
