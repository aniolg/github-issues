import { Heading } from '@radix-ui/themes'
import { useParams } from '@tanstack/react-router'
import IssueDetail from '@/components/domains/issue/IssueDetail/IssueDetail'
import { useIssues } from '@/hooks/useIssues'
import { useMemo } from 'react'
import { useIssueComments } from '@/hooks/useComments'
import IssueComments from '@/components/domains/issue/IssueComments/IssueCommnets'
import styles from './Issue.module.scss'

export default function Issue() {
  const { number } = useParams({ from: '/issue/$number' })

  const { issues } = useIssues()

  const { issueComments, isPending, isError } = useIssueComments(number)

  const issue = useMemo(
    () => issues.find((item) => item.number === Number(number)) || null,
    [issues, number],
  )

  return (
    <div className={styles.issuePage}>
      <Heading as="h2">Issue {issue && issue.title} </Heading>
      <IssueDetail issue={issue} />
      <IssueComments
        comments={issueComments}
        isPending={isPending}
        isError={isError}
      />
    </div>
  )
}
