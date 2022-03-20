

export default function ListaTareas(props) {
  return (
    <div>
            <ul>
                {
                props.tareas.map((tar,indice)=>(
                    <li key={indice}>
                         {tar}   

                    </li>
                ))
                }
            </ul>
    </div>
  )
}
