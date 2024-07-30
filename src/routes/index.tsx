import Issues from '@/pages/Issues'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <Issues />,
})
