import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

const UserProvider: React.FC = ({ children }) => {
  const [input, setinput] = useState<any>([
    {
    name:""
     },
   
  ])
  const [them, setthem] = useState<boolean>(false)
  return (
    <UserContext.Provider value={{ input, setinput, them, setthem }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
