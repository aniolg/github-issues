import { z } from 'zod'
import { mapIssueResponse, mapIssuesResponse } from './issue.adapter'

const issueSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  number: z.number(),
  url: z.string().nullable(),
  comments_url: z.string().nullable(),
  state: z.string().nullable(),
  title: z.string().nullable(),
  body: z.string().nullable(),
  locked: z.boolean().nullable(),
  active_lock_reason: z.string().nullable(),
  comments: z.number().nullable(),
  closed_at: z.string().nullable(),
  created_at: z.string().nullable(),
  updated_at: z.string().nullable(),
})

export type Issue = z.infer<typeof issueSchema>

const issueCommentSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  url: z.string().nullable(),
  html_url: z.string().nullable(),
  body: z.string().nullable(),
  user: z.object({
    login: z.string().nullable(),
    id: z.number().nullable(),
    node_id: z.string().nullable(),
    avatar_url: z.string().nullable(),
    gravatar_id: z.string().nullable(),
    url: z.string().nullable(),
    html_url: z.string().nullable(),
    followers_url: z.string().nullable(),
    following_url: z.string().nullable(),
    gists_url: z.string().nullable(),
    starred_url: z.string().nullable(),
    subscriptions_url: z.string().nullable(),
    organizations_url: z.string().nullable(),
    repos_url: z.string().nullable(),
    events_url: z.string().nullable(),
    received_events_url: z.string().nullable(),
    type: z.string().nullable(),
    site_admin: z.boolean().nullable(),
  }),
  created_at: z.string().nullable(),
  updated_at: z.string().nullable(),
  issue_url: z.string().nullable(),
  author_association: z.string().nullable(),
})

export type IssueComment = z.infer<typeof issueCommentSchema>

export function validateIssueData(issue: any) {
  const mappedIssue = z
    .preprocess((data) => mapIssueResponse(data as any), issueSchema)
    .safeParse(issue)

  if (!mappedIssue.success) {
    console.error(mappedIssue.error)
  }

  return mappedIssue.data || null
}

export function validateIssuesData(issues: any[]) {
  const mappedIssues = z
    .preprocess(
      (data) => mapIssuesResponse(data as any[]),
      z.array(issueSchema),
    )
    .safeParse(issues)

  if (!mappedIssues.success) {
    console.error(mappedIssues.error)
  }

  return mappedIssues.data || []
}

export function validateIssueCommentsData(comments: any[]) {
  const validation = z.array(issueCommentSchema).safeParse(comments)

  if (!validation.success) {
    console.error(validation.error)
  }

  return (validation.data as IssueComment[]) || []
}
