import styles from './List.module.scss'
import { ComponentProps } from 'react'
import cx from 'classnames'

type ListProps = ComponentProps<'ul'>

export function List({ children, className, ...props }: ListProps) {
  return (
    <ul className={cx(styles.list, className)} {...props}>
      {children}
    </ul>
  )
}

type ItemProps = ComponentProps<'li'>

export function Item({ children, className, ...props }: ItemProps) {
  return (
    <li className={cx(styles.item, className)} {...props}>
      {children}
    </li>
  )
}

List.Item = Item
