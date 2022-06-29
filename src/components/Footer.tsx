import React,{useContext,useState} from 'react'

import{UserContext} from '../../context/context'

const footer = () => {
  const Appstate:any =useContext(UserContext)
  return (
    <div>
        slaw la {Appstate.name}
    </div>
  )
}

export default footer
    