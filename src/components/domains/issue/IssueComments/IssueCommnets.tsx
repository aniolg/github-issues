import { Card, DataList, Text } from '@radix-ui/themes'
import { IssueComment } from '../issue.schema'
import styles from './IssueComments.module.scss'

type IssueCommentsProps = {
  comments: IssueComment[] | []
  isPending?: boolean
  isError?: boolean
}

export default function IssueComments({
  comments,
  isPending,
  isError,
}: IssueCommentsProps) {
  if (isPending) return <Text>Loading...</Text>

  if (isError) return <Text>{'Something Went Wrong'}</Text>

  if (!comments?.length) return <Text>{'No Comments Available'}</Text>
  return (
    <section className={styles.comments}>
      {comments.map((comment) => (
        <Card className={styles.comment} key={comment.id}>
          <DataList.Root>
            <DataList.Item>
              <DataList.Label>User</DataList.Label>
              <DataList.Value>{comment.user.login}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Message</DataList.Label>
              <DataList.Value>{comment.body}</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card>
      ))}
    </section>
  )
}
