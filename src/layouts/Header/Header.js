import './Header.scss';
import config from '../../config/config.json';

function Header() {
  const navItems = config.header.nav_items.map((item, index) => {
    return (
      <li className="main-nav-item" key={index}>
        <a className="main-nav-link" href={"#" + item.toLowerCase().replace(/(\s\w)/g, function (m) {
          return m[1].toUpperCase();
        })}>{item}</a>
      </li>
    );
  })

  const socialItems = config.header.social_media.map((item, index) => {
    return (
      <li className="social-media-item" key={index}>
        <a className="social-media-link" href={item.url}>
          <img className="social-media-icon" src={process.env.PUBLIC_URL + item.icon} alt={item.name}/>
        </a>
      </li>
    );
  })

  return (
    <header className="main-header">
      <div className="main-header-logo">
        <img src={process.env.PUBLIC_URL + config.header.logo_path} alt="logo"/>
      </div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          {navItems}
        </ul>
        <ul className="social-media-list">
          {socialItems}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
