// import React from 'react'

// const TabButton =({active, selectTab, children}:string)=> {
//     const buttonClasses = active 
//     ? 'text-white border-b border-purple-500'
//     :'text-[#ADB7BE] ';
//   return (
//     <button onClick={selectTab}>
//      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
//      {children}
//      </p>
               
//                </button>

//   )
// }

// export default TabButton;










import React from 'react';

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-white border-b border-purple-500'
    : 'text-[#ADB7BE]';

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
