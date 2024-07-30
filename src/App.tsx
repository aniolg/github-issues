import './App.module.scss'
import styles from './App.module.scss'

function App({ children }: { children?: React.ReactNode }) {
  return <div className={styles.app}>{children}</div>
}

export default App
