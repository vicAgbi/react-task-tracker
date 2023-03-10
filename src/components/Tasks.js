import Task from "./Task"

const Tasks = ({tasks, onDelete, onEdit, onToggle }) => {
  return (

    <>
      {tasks.map((task) =>(
      <Task key={task.id} onEdit={onEdit} task={task}
       onDelete={onDelete}
       onToggle ={onToggle}
       />
       ))}
    </>
  )
}

export default Tasks
