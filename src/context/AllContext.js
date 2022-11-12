import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

const AllContext = ({ children }) => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);
   const [stickyMenu, setStickyMenu] = useState(false);
   // sticky
   useEffect(() => {
      const stickyMenuBar = () => {
         if (window.scrollY > 80) {
            setStickyMenu(true)
         }
         else {
            setStickyMenu(false)
         }
      }
      window.addEventListener('scroll', stickyMenuBar);
   }, [])
   const values = {
      isVideoOpen,
      setIsVideoOpen,
      stickyMenu,
   }
   return (
      <>
         <AppContext.Provider value={values}>
            {children}
         </AppContext.Provider>
      </>
   );
};

export default AllContext;