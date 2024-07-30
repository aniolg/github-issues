import IssueList from '@/components/domains/issue/IssueList/IssueList'
import { Heading } from '@radix-ui/themes'
import { useIssues } from '@/hooks/useIssues'
import styles from './Issues.module.scss'

export default function Issues() {
  const { isPending, isError, issues } = useIssues()
  return (
    <div className={styles.issuesPage}>
      <Heading as="h2">Issues</Heading>
      <IssueList issues={issues} isPending={isPending} isError={isError} />
    </div>
  )
}
