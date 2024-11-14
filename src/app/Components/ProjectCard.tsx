

// import React from 'react';
// import Image from 'next/image';
// import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';

// const example:string="example"
// const ProjectCard = ({ imgUrl, title, description,gitUrl , PreviewUrl }: string) => {
//   return (
//     <div className='rounded-xl overflow-hidden shadow-lg'>
//       {/* Container for the image with a specific height and width */}
//       <div className='h-96 md:h-[400px] relative group'>
//         {/* Background image with hover effects */}
//         <Image
//           src={imgUrl}
//           alt={title}
//           layout='fill' // This will make the image cover the entire container
//           objectFit='cover' // Ensures the image covers the container properly
//           className='rounded-t-xl'
//         />
//         {/* Overlay with hover effects */}
//         <div
//           className='overlay items-center justify-center 
//             absolute top-0 left-0 w-full h-full 
//             bg-[#181818] bg-opacity-0 hidden group-hover:flex 
//             group-hover:bg-opacity-80 transition-all duration-500'
//         >
//           <Link
//             href={gitUrl}
//             className='h-14 w-14 border-2 relative mr-2
//                 rounded-full border-[#ADB7BE] hover:border-white 
//                 group/link'
//           >
//             <CodeBracketIcon
//               className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 
//                 left-1/2 transform -translate-x-1/2 -translate-y-1/2  
//                 cursor-pointer group-hover/link:text-white '
//             />
//           </Link>

//           <Link
          
//             href={PreviewUrl }
//             target="_blank"
//             className='h-14 w-14 border-2 relative 
//                 rounded-full border-[#ADB7BE] hover:border-white 
//                 group/link'
                
//           >
//             <button
//              className='h-40 w-40 text-[#ADB7BE] absolute top-1/2 
//              left-1/2 transform -translate-x-1/2 -translate-y-1/2  
//              cursor-pointer group-hover/link:text-white '
// >resum 1</button>
//           </Link>
          
//         </div>
//       </div>

//       {/* Text section */}
//       <div className='text-white rounded-b-xl mt-3 bg-[#181818] p-4 py-6 px-4'>
//         <h4 className='text-xl font-semibold mb-2'>{title}</h4>
//         <p className='text-[#ADB7BE]'>{description}</p>
//       </div>
      
//     </div>
//   );
// };

// export default ProjectCard;










import React from 'react';
import Image from 'next/image';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Define the props type for ProjectCard
interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  PreviewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  PreviewUrl,
}) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
      {/* Container for the image with a specific height and width */}
      <div className='h-96 md:h-[400px] relative group'>
        {/* Background image with hover effects */}
        <Image
          src={imgUrl}
          alt={title}
          layout='fill'
          objectFit='cover'
          className='rounded-t-xl'
        />
        {/* Overlay with hover effects */}
        <div
          className='overlay items-center justify-center 
            absolute top-0 left-0 w-full h-full 
            bg-[#181818] bg-opacity-0 hidden group-hover:flex 
            group-hover:bg-opacity-80 transition-all duration-500'
        >
          <Link
            href={gitUrl}
            className='h-14 w-14 border-2 relative mr-2
                rounded-full border-[#ADB7BE] hover:border-white 
                group/link'
          >
            <CodeBracketIcon
              className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 
                left-1/2 transform -translate-x-1/2 -translate-y-1/2  
                cursor-pointer group-hover/link:text-white '
            />
          </Link>

          <Link
            href={PreviewUrl}
            target="_blank"
            className='h-14 w-14 border-2 relative 
                rounded-full border-[#ADB7BE] hover:border-white 
                group/link'
          >
            <button
              className='h-40 w-40 text-[#ADB7BE] absolute top-1/2 
                left-1/2 transform -translate-x-1/2 -translate-y-1/2  
                cursor-pointer group-hover/link:text-white '
            >
              Resume 1
            </button>
          </Link>
        </div>
      </div>

      {/* Text section */}
      <div className='text-white rounded-b-xl mt-3 bg-[#181818] p-4 py-6 px-4'>
        <h4 className='text-xl font-semibold mb-2'>{title}</h4>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
