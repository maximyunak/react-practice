const LINKS = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '/catalog' },
  { label: 'Корзина', href: '/cart' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="logo">тихо.</a>
            <span className="footer__slogan">Простые вещи. Больше уюта.</span>
          </div>

          <nav className="footer__nav" aria-label="Навигация в подвале">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="mailto:hello@tiho.ru" className="footer__email">
              hello@tiho.ru
            </a>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© 2026 тихо. Товары для дома</span>
          <a href="/privacy">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}