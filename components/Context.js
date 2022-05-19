import React, { createContext, useState, useRef, useEffect } from 'react';
const DarkModeContext = createContext();
const ContextProvider = ({ children }) => {
  
    const [mode, setMode] = useState('light');
     
     
   
           
    
       return (
         <DarkModeContext.Provider value={{
              mode,
            setMode
   
         }}
         >
           {children}
         </DarkModeContext.Provider>
       );
     };
     
     export { ContextProvider,DarkModeContext };