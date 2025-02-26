import TaskForm from '@/components/task-form'
import TaskList from '@/components/task-list'
import TaskListItem from '@/components/task-list-item'
import useTasks from '@/hooks/use-tasks'

function App() {
  const { tasks } = useTasks()

  return (
    <div className="bg-stone-50 flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-5 min-w-1/3">
        <h1 className="text-3xl font-bold text-stone-700">To do list</h1>
        <TaskForm />
        {/* NewTask component */}
        <TaskList>
          {tasks.map((task) => (
            <TaskListItem key={task.id} task={task} />
          ))}
        </TaskList>
      </div>
    </div>
  )
}

export default App
