import {
  validateIssueCommentsData,
  validateIssueData,
  validateIssuesData,
} from '@/components/domains/issue/issue.schema'

/**
 * Fetch issue from github api
 * @param number
 * @returns Promise<Issue | null>
 */
export async function fetchIssue(number: string) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/facebook/react/issues/${number}`,
    )

    if (!response.ok) {
      throw new Error('Failed to fetch issue')
    }

    const data = await response.json()

    return validateIssueData(data)
  } catch (error) {
    console.error(error)
  }
}

/**
 * Fetch issues list from github api
 * @param page
 * @returns Promise<Issue[] | []>
 */
export async function fetchIssues(page: number) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/facebook/react/issues?state=all&per_page=10&page=${page}`,
    )

    if (!response.ok) {
      throw new Error('Failed to fetch issues')
    }

    const data = await response.json()

    return validateIssuesData(data)
  } catch (error) {
    console.error(error)
  }
}

/**
 * Fetch issue comments from github api
 * @param number
 * @returns Promise<Comment[] | []>
 */
export async function fetchIssueComments(number: string) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/facebook/react/issues/${number}/comments`,
    )

    if (!response.ok) {
      throw new Error('Failed to fetch issue comments')
    }

    const data = await response.json()

    return validateIssueCommentsData(data)
  } catch (error) {
    console.error(error)
  }
}
