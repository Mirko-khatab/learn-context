import React, { createContext, useState } from "react";

export const UserContext = createContext({});

// This context provider is passed to any component requiring the context
export const UserProvider:React.FC = ({ children }) => {
  // all data we want to share
    // for test
  const [name,setname]=useState('mirkokawa')
  

  
  return (
    <UserContext.Provider
      value={{
        name,
        setname,
         
        }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider