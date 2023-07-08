import './Footer.scss';
import config from '../../config/config.json';

function Footer() {
  const copyRightYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <p>Copyright {copyRightYear}. {config.footer.author}. All rights reserved.
        <br/>
        This theme is licensed under the&nbsp;
        <a href={config.footer.license_url}>{config.footer.license} license</a>.
        If you want to use this theme, visit my&nbsp;
        <a href={config.footer.theme_url}>{config.footer.theme_url_name}</a>.
      </p>
    </footer>
  );
}

export default Footer;
