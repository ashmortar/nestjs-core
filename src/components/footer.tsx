import { Translations } from '@core/i18n/i18n.utils';
import { Link } from './link';

export function Footer({ t }: Translations) {
  return (
    <footer id="footer">
      <ul id="footer-link-list">
        <li id="footer-about-link">
          <Link hx-get="/about">{t('main.links.about')}</Link>
        </li>
        <li id="footer-contact-link">
          <Link hx-get="/contact">{t('main.links.contact')}</Link>
        </li>
        <li id="footer-terms-link">
          <Link hx-get="/terms">{t('main.links.tou')}</Link>
        </li>
        <li id="footer-privacy-link">
          <Link hx-get="/privacy">{t('main.links.privacy')}</Link>
        </li>
      </ul>
    </footer>
  );
}
