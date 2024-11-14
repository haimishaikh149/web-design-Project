



// import React from 'react';
// import NavLink from './NavLink';

// const example: string = "example";

// // Define the type for the links array
// interface Link {
//   title: string;
//   path: string;
// }

// interface MenuOverlayProps {
//   links: Link[];
// }

// const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
//   // Ensure 'links' is an array and not empty
//   if (!Array.isArray(links) || links.length === 0) {
//     return null;
//   }

//   return (
//     <ul className='flex flex-col py-4 items-center'>
//       {links.map((link) => (
//         <li key={link.title}> 
//           <NavLink href={link.path} title={link.title} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MenuOverlay;









import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links }: { links: { title: string; path: string }[] }) => {
  if (!Array.isArray(links) || links.length === 0) {
    return null;
  }

  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link) => (
        <li key={link.title}> 
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;

