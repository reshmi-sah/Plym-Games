// import React from 'react'
// import { FaCheck, FaTimes, FaStar, } from "react-icons/fa";

// const Badge = ({ text, color = 'green', icon, iconColor, className="", children, }) => {

//     const styles = {
//          green:{
//            bg: "bg-[#130E21]",
//            text: "text-white",
//            icon: "text-[#20E89E]",
//            shadow: "shadow-[0_0_35px_rgba(19,14,33,0.9),_0_0_50px_rgba(19,14,33,0.95)]"
//          },
//           red: {
//            bg: "bg-[#130E21]",
//            text: "text-gray-400",
//            icon: "text-red-400",
//          },
//          yellow: {
//            bg: "bg-[#130E21]",
//            text: "text-white",
//            icon: "text-yellow-500",
//          },
//     };
    
// const currentStyle = styles[color] || styles.green;

//   return (
//     <span
//       className={`px-3 py-1 rounded-full font-[200] border border-gray-800 text-[0.8rem]  flex items-center gap-1
//         ${currentStyle.bg}
//         ${currentStyle.shadow || ""}
//         ${className}`}   
//     >
//       {icon && (
//         <span className={iconColor || currentStyle.icon}>
//           {icon}
//         </span>
//       )}
//       <span className={currentStyle.text}>{text}</span>

//       {children}
//     </span>
//   )
// }

// export default Badge


import React from 'react';
import { FaCheck, FaTimes, FaStar } from "react-icons/fa";

const Badge = ({ text, color = 'green', icon, iconColor, className = "", children }) => {

  const styles = {
    green: {
      bg: "bg-[#130E21]",
      text: "text-white",
      icon: "text-[#20E89E]",
      shadow: "shadow-[0_0_35px_rgba(19,14,33,0.9),_0_0_50px_rgba(19,14,33,0.95)]"
    },
    red: {
      bg: "bg-[#130E21]",
      text: "text-gray-400",
      icon: "text-red-400",
    },
    yellow: {
      bg: "bg-[#130E21]",
      text: "text-white",
      icon: "text-yellow-500",
    },
  };

  const currentStyle = styles[color] || styles.green;

  return (
    <span
      className={`px-3 py-1 rounded-full font-[200] border border-gray-800
        text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]
        flex items-center gap-1 flex-wrap
        ${currentStyle.bg}
        ${currentStyle.shadow || ""}
        ${className}`}
    >
      {icon && (
        <span className={iconColor || currentStyle.icon}>
          {icon}
        </span>
      )}
      <span className={currentStyle.text}>{text}</span>

      {children}
    </span>
  );
}

export default Badge;
