import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={styles.header}>
      <Link to='/'>
        <img src='./pokemonLogo.png' className={styles.image} />
      </Link>
    </div>
  )
}

export default Header
