import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Select, TextField } from '@radix-ui/themes'
import styles from './SearchSection.module.scss'

export default function SearchSection() {
  return (
    <section className={styles.container}>
      <TextField.Root className={styles.search} placeholder="Search issues…">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <Select.Root defaultValue="all">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="all">All</Select.Item>
          <Select.Item value="open">Open</Select.Item>
          <Select.Item value="closed">Closed</Select.Item>
        </Select.Content>
      </Select.Root>
    </section>
  )
}
