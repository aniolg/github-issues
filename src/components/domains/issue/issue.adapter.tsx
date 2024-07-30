import { Issue } from './issue.schema'

export function mapIssueResponse(issue: any): Issue {
  return {
    id: issue.id,
    node_id: issue.node_id,
    url: issue.url,
    comments_url: issue.comments_url,
    number: issue.number,
    state: issue.state,
    title: issue.title,
    body: issue.body,
    locked: issue.locked,
    active_lock_reason: issue.active_lock_reason,
    comments: issue.comments,
    closed_at: issue.closed_at,
    created_at: issue.created_at,
    updated_at: issue.updated_at,
  } as Issue
}

export function mapIssuesResponse(issues: any[]): Issue[] {
  if (!issues) return []

  return issues.map((issue) => mapIssueResponse(issue))
}
