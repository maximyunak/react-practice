import { NavLink } from "react-router-dom";

interface HeaderProps {
  cartCount?: number;
}

const NAV_ITEMS = [
  { label: 'Главная', href: '/', active: true },
  { label: 'Каталог', href: '/catalog' },
  { label: 'Корзина', href: '/cart', isCart: true },
];

export default function Header({ cartCount = 0 }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__brand">
          <a href="/" className="logo">тихо.</a>
          <span className="header__tagline">Вещи для дома и себя</span>
        </div>

        <nav className="header__nav" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `header__link${isActive ? " header__link--active" : ""}`
              }

            >
              {item.label}
              {item.isCart && cartCount > 0 && (
                <span className="header__badge">{cartCount}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}