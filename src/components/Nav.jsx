export default function Nav() {
  return (
    <nav className="nav">
      <img src="/logo.svg" className="nav-logo" alt="Ryan Calderon" />
      <div className="nav-links">
        <a href="#work">work</a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#contact">contact</a>
      </div>
      <a href="#contact" className="nav-cta">hire me</a>
    </nav>
  )
}
