import React,{useContext,useState} from 'react'
import { UserContext } from '../context/context'


const footer = () => {
const Appstate = useContext(UserContext)


  return (
    <div>
 ama footera bra {Appstate.input.map((e)=>{
  return(
    e.name
  )
 })}
    </div>
  )
}

export default footer
    