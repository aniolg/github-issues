import { fetchIssueComments } from '@/lib/fetchIssue'
import { useQuery } from '@tanstack/react-query'

export function useIssueComments(number: string) {
  const {
    isPending,
    isError,
    data: issueComments = [],
  } = useQuery({
    queryKey: ['comments', number],
    queryFn: async () => fetchIssueComments(number),
    staleTime: 0,
  })

  return { isPending, isError, issueComments }
}
