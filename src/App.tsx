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

  function handleToggle(id: number) {
    setTasks((oldTasks) =>
      oldTasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )
  }

  // Write a function to remove a task
  // Add a form, input field, and a submit button to create new tasks

  return (
    <div className="bg-stone-50 flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-5 min-w-1/3">
        <h1 className="text-3xl font-bold text-stone-700">Todo list</h1>
        <ul className="text-stone-500 pt-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between space-x-4 my-2">
              <div className="flex items-center space-x-4">
                <input onClick={() => handleToggle(task.id)} type="checkbox" checked={task.done} />
                <p className={task.done ? 'line-through' : ''}>{task.title}</p>
              </div>
              <button className="text-red-500">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
