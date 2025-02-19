import { ChangeEvent, FormEvent } from 'react'
import { useAtom } from 'jotai'
import { newTaskStore, tasksStore } from '../stores'

export default function useTasks() {
  const [tasks, setTasks] = useAtom(tasksStore)
  const [newtask, setNewTask] = useAtom(newTaskStore)

  function handleToggle(id: number) {
    setTasks((oldTasks) =>
      oldTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setTasks((oldTasks) => [
      ...oldTasks,
      { id: oldTasks.length + 1, title: newtask, done: false },
    ])
    setNewTask('')
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return {
    tasks,
    newtask,
    handleToggle,
    handleChange,
    handleSubmit,
    deleteTask,
  }
}
