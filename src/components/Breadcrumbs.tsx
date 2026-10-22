import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      {items.map((item, index) => (
        <span key={item.label} className="breadcrumbs__item">
          {item.to ? (
            <Link to={item.to} className="breadcrumbs__link">
              {item.label}
            </Link>
          ) : (
            <span className="breadcrumbs__current" aria-current="page">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <span className="breadcrumbs__sep">/</span>
          )}
        </span>
      ))}
    </nav>
  );
};