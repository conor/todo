import { useAtom } from 'jotai'
import { tasksStore } from '../stores'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const taskFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .nonempty(),
})

type TaskFormValues = z.infer<typeof taskFormSchema>

export default function useTasks() {
  const [tasks, setTasks] = useAtom(tasksStore)

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      name: '',
    },
  })

  function handleToggle(id: number) {
    setTasks((oldTasks) =>
      oldTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  function handleSubmit(values: TaskFormValues) {
    const { name } = values
    setTasks((oldTasks) => [
      ...oldTasks,
      { id: oldTasks.length + 1, title: name, done: false },
    ])
    form.reset()
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return {
    deleteTask,
    form,
    handleToggle,
    handleSubmit,
    tasks,
  }
}
