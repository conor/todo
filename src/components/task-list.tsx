interface TaskListProps {
  children: React.ReactNode
}

export default function TaskList({ children }: TaskListProps) {
  return <ul className="text-stone-500 pt-4">{children}</ul>
}
