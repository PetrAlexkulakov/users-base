import Link from "next/link"
import styles from '../styles/A.module.css'

export default () => {
  return (
    <div className={styles.navbar}>
        <Link href="/">Main</Link>
        <Link href="/users">Users</Link>
    </div>
  )
}
