import useTasks from '@/hooks/use-tasks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

export default function TaskForm() {
  const { form, handleSubmit } = useTasks()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex gap-x-3 pt-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel className="sr-only">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Add an item" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  Add a new task
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add Task</Button>
        </div>
      </form>
    </Form>
  )
}
