import { Avatar, Badge, Heading, Text } from '@radix-ui/themes'
import { Issue } from '../issue.schema'
import { List } from '@/components/ui/List/List'
import { ChatBubbleIcon, CircleIcon } from '@radix-ui/react-icons'
import IssueListSkeleton from './Skeleton'
import styles from './IssueList.module.scss'
import { Link } from '@tanstack/react-router'

interface IssueListProps {
  issues: Issue[] | []
  isPending?: boolean
  isError?: boolean
}

export default function IssueList({
  issues,
  isPending = false,
  isError = false,
}: IssueListProps) {
  if (isPending) return <IssueListSkeleton />

  if (isError) return <Text>{'Something went wrong'}</Text>

  if (!issues?.length) return <Text>{'No Issues :('}</Text>

  return (
    <List>
      {issues.map((issue) => (
        <List.Item key={issue.id}>
          <Link
            className={styles.issueItem}
            key={issue.id}
            to={'/issue/$number'}
            params={{
              number: issue.number.toString(),
            }}
          >
            <Avatar
              className={styles.avatar}
              size={{
                initial: '5',
                sm: '2',
              }}
              fallback={<CircleIcon />}
            />
            <div className={styles.header}>
              <div className={styles.title}>
                <Heading as="h3" size="4">
                  {issue.title}
                </Heading>
                <Badge className={styles.state} size="3" variant="outline">
                  {issue.state}
                </Badge>
              </div>
              <Text className={styles.comments} size="3" color="gray">
                <ChatBubbleIcon /> {issue.comments}
              </Text>
            </div>

            <Text className={styles.body} size="3" color="gray">
              {issue.body}
            </Text>
          </Link>
        </List.Item>
      ))}
    </List>
  )
}
