import useTasks from '@/hooks/use-tasks'

export default function TaskForm() {
  const { newtask, handleChange, handleSubmit } = useTasks()

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newtask}
        onChange={handleChange}
        type="text"
        placeholder="Add an item"
      />
      <button type="submit">Add Task</button>
    </form>
  )
}
