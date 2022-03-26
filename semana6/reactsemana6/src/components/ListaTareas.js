import React from 'react'

export default function ListaTareas(props) {
  return (
    <ul>
        {props.tareas.map((tar,indice)=>(
            <li key={indice}>
                  {tar}  
            </li>
        ))}
    </ul>
  )
}
