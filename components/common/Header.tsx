import headerStyles from '../../styles/Header.module.css'

const Header = (): JSX.Element => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>galleria.</h1>
      <p className={headerStyles.link_text}>start slideshow</p>
    </header>
  )
}

export default Header
