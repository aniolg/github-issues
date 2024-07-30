import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import IssueList from './IssueList'
import { issuesMockFactory } from '../__mocks___/issue'

describe('IssueList', () => {
  it('should render the IssueList component', () => {
    render(<IssueList issues={issuesMockFactory(10)} />)

    screen.debug()
  }),
    it('should render no issues text when no issues are passed', () => {
      render(<IssueList issues={[]} />)

      expect(screen.getByText('No Issues :(')).toBeInTheDocument()
    })
})
