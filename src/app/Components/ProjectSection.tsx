

// "use client";
// import React, { useState } from 'react';
// import ProjectCard from './ProjectCard';
// import ProjectTag from './ProjectTag';

// // Projects ka data jo aap render karna chahte hain
// const ProjectsData = [
//  {
//  id: 1,
//  title: "React Portfolio Website",
//  description: "Project 1 description",
//  image: "/Images/react1.png",
//  tag: ["All", "Web"],
//  gitUrl: "#",
//  PreviewUrl: "https://milestone1resumebyhirashaikh.vercel.app/",
//  },
//  {
//  id: 2,
//  title: "Photography Portfolio Website",
//  description: "Project 2 description",
//  image: "/Images/photography.png",
//  tag: ["All", "Web"],
//  gitUrl: "#",
//  PreviewUrl: "https://milestone-1-resume-builder-by-hira-shaikh.vercel.app/",
//  },
//  {
//  id: 3,
//  title: "React Portfolio Website",
//  description: "Project 3 description",
//  image: "/Images/react1.png",
//  tag: ["All", "Web"],
//  gitUrl: "#",
//  PreviewUrl: "https://resume-builder-2-three.vercel.app/",
//  },
//  {
//  id: 4,
//  title: "E-commerce Application",
//  description: "Project 4 description",
//  image: "/Images/ecommerce.png",
//  tag: ["All", "Web"],
//  gitUrl: "#",
//  PreviewUrl: "https://mileston-editable-resume-builder-by-hira-shaikh.vercel.app/",
//  },
//  {
//  id: 5,
//  title: "React FireBase Template",
//  description: "Authentication and CRUD operation",
//  image: "/Images/template.png",
//  tag: ["All", "Web"],
//  gitUrl: "#",
//  PreviewUrl: "https://milestone5-shareable-link-download-pdf.vercel.app/",
//  },
//  {
//  id: 6,
//  title: "Full-stack Roadmap",
//  description: "Project 6 description",
//  image: "/Images/roadmap.png",
//  tag: ["All", "Web"],
//  gitUrl: "#",
//  PreviewUrl: "",
//  },
// ];

// // Projects section jo aapke project cards ko display karega
// const ProjectSection = () => {
//  const [tag, setTag] = useState("All");

//  const example:string ="example"
//  const handleTageChange = (newTag: string) => {
//  setTag(newTag);
//  };

//  const filterProjects = ProjectsData.filter((project) =>
//  project.tag.includes(tag)
//  );

//  return (
//  <>
//  <h2 className='text-center text-4xl font-bold text-white mt-4'>
//  My Projects
//  </h2>

//  <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
//  <ProjectTag onClick={handleTageChange} name="All" isSelected={tag === "All"} />
//  <ProjectTag onClick={handleTageChange} name="Web" isSelected={tag === "Web"} />
//  <ProjectTag onClick={handleTageChange} name="Mobile" isSelected={tag === "Mobile"} />
//  </div>

//  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
//  {filterProjects.map((project) => (
//  <ProjectCard
//  key={project.id} // unique key pass karna zaroori hai
//  title={project.title}
//  description={project.description}
//  imgUrl={project.image} // image prop ko sahi se pass karna
//  gitUrl={project.gitUrl}
//  PreviewUrl={project.PreviewUrl}
//  target="_blank" // added target="_blank" here
//  />
//  ))}
//  </div>
// </>
//  );
// };

// export default ProjectSection;






"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

// Projects ka data jo aap render karna chahte hain
const ProjectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/Images/react1.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    PreviewUrl: "https://milestone1resumebyhirashaikh.vercel.app/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/Images/photography.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    PreviewUrl: "https://milestone-1-resume-builder-by-hira-shaikh.vercel.app/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 3 description",
    image: "/Images/react1.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    PreviewUrl: "https://resume-builder-2-three.vercel.app/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description: "Project 4 description",
    image: "/Images/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    PreviewUrl: "https://mileston-editable-resume-builder-by-hira-shaikh.vercel.app/",
  },
  {
    id: 5,
    title: "React FireBase Template",
    description: "Authentication and CRUD operation",
    image: "/Images/template.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    PreviewUrl: "https://milestone5-shareable-link-download-pdf.vercel.app/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 6 description",
    image: "/Images/roadmap.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    PreviewUrl: "",
  },
];

// Projects section jo aapke project cards ko display karega
const ProjectSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>
        My Projects
      </h2>

      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={() => handleTagChange("Web")} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={() => handleTagChange("Mobile")} name="Mobile" isSelected={tag === "Mobile"} />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            PreviewUrl={project.PreviewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
