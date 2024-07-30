import { List } from '@/components/ui/List/List'
import { Skeleton } from '@radix-ui/themes'

const ITEMS_NUMBER = 10
export default function IssueList() {
  return (
    <List>
      {Array.from({ length: ITEMS_NUMBER }).map((_: unknown, index: number) => (
        <List.Item key={index}>
          <Skeleton width="100%" height="4rem" />
        </List.Item>
      ))}
    </List>
  )
}
