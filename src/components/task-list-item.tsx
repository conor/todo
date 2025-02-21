import useTasks from '@/hooks/use-tasks'
import { type Task } from '@/stores'

interface TaskListItemProps {
  task: Task
}

export default function TaskListItem({ task }: TaskListItemProps) {
  const { handleToggle, deleteTask } = useTasks()
  return (
    <li
      key={task.id}
      className="flex items-center justify-between space-x-4 my-2"
    >
      <div className="flex items-center space-x-4">
        <input
          onChange={() => handleToggle(task.id)}
          type="checkbox"
          checked={task.done}
        />
        <p className={task.done ? 'line-through' : ''}>{task.title}</p>
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-red-500">
        Remove
      </button>
    </li>
  )
}
