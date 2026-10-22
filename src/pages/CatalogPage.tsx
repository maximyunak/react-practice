import { useMemo, useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { ProductCard } from "../components/ProductCard.tsx";
import { CATEGORIES, PRODUCTS, type Category, type Product } from "../mock/products.ts";
import { useCart } from "../utils/useCart.ts";

type SortOrder = "asc" | "desc";

const pluralizeProducts = (n: number) => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "товар";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "товара";
  return "товаров";
};

export const CatalogPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sort, setSort] = useState<SortOrder>("asc");
  const {addItem} = useCart()

  const q = query.trim().toLowerCase();

  const products = PRODUCTS.filter(
    (p) => category === "all" || p.category === category,
  )
    .filter((p) => p.title.toLowerCase().includes(q))
    .sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));

  const handleAddToCart = (product: Product) => {
    addItem(product)
  };

  return (
    <div className="page container">
      <Breadcrumbs items={[{ label: "Главная", to: "/" }, { label: "Каталог" }]} />

      <div className="catalog__head">
        <h1 className="page__title">Каталог</h1>
        <p className="catalog__count">
          {products.length} {pluralizeProducts(products.length)} для вашего дома
        </p>
      </div>

      <div className="catalog__toolbar">
        <label className="search">
          <svg
            className="search__icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.2" />
            <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <input
            className="search__input"
            type="search"
            placeholder="Найти что-нибудь для дома"
            aria-label="Поиск по каталогу"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        <select
          className="select"
          aria-label="Сортировка"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOrder)}
        >
          <option value="asc">Цена: по возрастанию</option>
          <option value="desc">Цена: по убыванию</option>
        </select>
      </div>

      <div className="chips" role="group" aria-label="Категории">
        {(["all", ...CATEGORIES] as const).map((c) => (
          <button
            key={c}
            type="button"
            className={`chip${category === c ? " chip--active" : ""}`}
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c === "all" ? "Все товары" : c}
          </button>
        ))}
      </div>

      {products.length > 0 ? (
        <div className="catalog__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      ) : (
        <p className="catalog__empty">
          Ничего не нашлось. Измените запрос или выберите другую категорию.
        </p>
      )}
    </div>
  );
};