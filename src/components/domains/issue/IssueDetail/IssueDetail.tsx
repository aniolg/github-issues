import { Badge, DataList } from '@radix-ui/themes'
import { Issue } from '../issue.schema'

type IssueDetailProps = {
  issue: Issue | null
  isPending?: boolean
  isError?: boolean
}

export default function IssueDetail({
  issue,
  isPending,
  isError,
}: IssueDetailProps) {
  if (!issue) return null

  if (isPending) return <DataList.Root>Loading...</DataList.Root>

  if (isError) return <DataList.Root>Something went wrong</DataList.Root>

  return (
    <section>
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label>Status</DataList.Label>
          <DataList.Value>
            <Badge variant="soft" radius="full">
              {issue.state}
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Created at</DataList.Label>
          <DataList.Value>{issue.created_at}</DataList.Value>
        </DataList.Item>
        {issue.updated_at && (
          <DataList.Item>
            <DataList.Label>Updated at</DataList.Label>
            <DataList.Value>{issue.updated_at}</DataList.Value>
          </DataList.Item>
        )}
        {issue.closed_at && (
          <DataList.Item>
            <DataList.Label>Closed at</DataList.Label>
            <DataList.Value>{issue.closed_at}</DataList.Value>
          </DataList.Item>
        )}
        {issue.body && (
          <DataList.Item>
            <DataList.Label>Description</DataList.Label>
            <DataList.Value>{issue.body}</DataList.Value>
          </DataList.Item>
        )}
      </DataList.Root>
    </section>
  )
}
