import { useState } from 'react'

interface Task {
  id: number
  title: string
  done: boolean
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Send invites for party',
    done: true,
  },
  {
    id: 2,
    title: 'Buy groceries',
    done: false,
  },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const[newtask,setNewTask]= useState("")

  function handleToggle(id: number) {
    setTasks((oldTasks) =>
      oldTasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )
  }
  function handleChange() {
    const newTaskObj: Task = {
      id: tasks.length + 1, // Simple unique ID generation
      title: newtask,
      done: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("")
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  
  
 
  

  // Write a function to remove a task
  // Add a form, input field, and a submit button to create new tasks

  return (
    <div className="bg-stone-50 flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-5 min-w-1/3">
        <h1 className="text-3xl font-bold text-stone-700">Todo list</h1>
        <div className='bg-gray-500 border-indigo-500 rounded-lg'>
         <input  value={newtask} onChange={(event) => setNewTask(event.target.value)} type='text' placeholder='Add an item'/>
         <button onClick={handleChange}>Add Task</button>
        </div>
        <ul className="text-stone-500 pt-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between space-x-4 my-2">
              <div className="flex items-center space-x-4">
                <input onClick={() => handleToggle(task.id)} type="checkbox" checked={task.done} />
                <p className={task.done ? 'line-through' : ''}>{task.title}</p>
              </div>
              <button onClick={()=>deleteTask(task.id)} className="text-red-500">Remove</button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
