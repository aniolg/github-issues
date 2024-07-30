import { fetchIssues } from '@/lib/fetchIssue'
import { useQuery } from '@tanstack/react-query'

export function useIssues() {
  const {
    isPending,
    isError,
    data: issues = [],
  } = useQuery({
    queryKey: ['issues'],
    queryFn: async () => fetchIssues(1),
  })

  return { isPending, isError, issues }
}
