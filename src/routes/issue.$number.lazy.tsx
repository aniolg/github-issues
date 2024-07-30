import Issue from '@/pages/Issue'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/issue/$number')({
  component: () => <Issue />,
})
