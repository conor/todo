import { z } from 'zod'

export const taskFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .nonempty(),
})

export type TaskFormValues = z.infer<typeof taskFormSchema>
