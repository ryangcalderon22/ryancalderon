export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="/logo.svg" className="footer-logo" alt="Ryan Calderon" />
        <div className="footer-links">
          <a href="#work">work</a>
          <a href="#services">services</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Ryan Calderon · ryancalderon.me</span>
        <div className="avail">
          <span className="avail-dot" />
          open to projects
        </div>
      </div>
    </footer>
  )
}
