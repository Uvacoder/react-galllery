import headerStyles from '../../styles/Header.module.css'

const Header = (): JSX.Element => {
  return (
    <header className={headerStyles.header}>
      <h1>galleria.</h1>
      <p>start slideshow</p>
    </header>
  )
}

export default Header
