export type Category = "Посуда" | "Текстиль" | "Декор" | "Хранение";

export const CATEGORIES: Category[] = ["Посуда", "Текстиль", "Декор", "Хранение"];

export interface Product {
  id: string;
  sku: string;
  title: string;
  category: Category;
  subtitle: string;
  description: string;
  price: number;
  inStock: boolean;
  image: string;
  details: { label: string; value: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "tihoe-utro",
    sku: "TH-001",
    title: "Кружка «Тихое утро»",
    category: "Посуда",
    subtitle: "Керамика · 350 мл",
    description:
      "Для первого кофе и неспешных завтраков. Керамическая кружка с матовой глазурью приятно лежит в ладонях и сохраняет тепло любимого напитка.",
    price: 890,
    inStock: true,
    image: "/images/mug.png",
    details: [
      { label: "Материал", value: "Керамика" },
      { label: "Объём", value: "350 мл" },
      { label: "Цвет", value: "Молочный" },
    ],
  },
  {
    id: "len",
    sku: "TH-002",
    title: "Салфетки «Лён»",
    category: "Текстиль",
    subtitle: "Лён · набор из 2 шт.",
    description:
      "Мягкие льняные салфетки для сервировки. Со временем становятся только приятнее на ощупь.",
    price: 990,
    inStock: true,
    image: "/images/mug.png",
    details: [
      { label: "Материал", value: "Лён" },
      { label: "Количество", value: "2 шт." },
      { label: "Цвет", value: "Натуральный" },
    ],
  },
  {
    id: "pauza",
    sku: "TH-003",
    title: "Свеча «Пауза»",
    category: "Декор",
    subtitle: "Соевый воск · 180 г",
    description:
      "Свеча из соевого воска в керамическом стакане. Горит ровно и мягко, создаёт спокойное настроение вечером.",
    price: 1190,
    inStock: true,
    image: "/images/mug.png",
    details: [
      { label: "Материал", value: "Соевый воск" },
      { label: "Вес", value: "180 г" },
      { label: "Цвет", value: "Молочный" },
    ],
  },
  {
    id: "poryadok",
    sku: "TH-004",
    title: "Корзина «Порядок»",
    category: "Хранение",
    subtitle: "Морская трава · 28 см",
    description:
      "Плетёная корзина с ручками для пледов, игрушек и всяких мелочей. Легко находит место в любой комнате.",
    price: 1590,
    inStock: true,
    image: "/images/mug.png",
    details: [
      { label: "Материал", value: "Морская трава" },
      { label: "Диаметр", value: "28 см" },
      { label: "Цвет", value: "Натуральный" },
    ],
  },
  {
    id: "liniya",
    sku: "TH-005",
    title: "Ваза «Линия»",
    category: "Декор",
    subtitle: "Керамика · 22 см",
    description:
      "Керамическая ваза с узким горлом. Хороша и с одной веточкой, и совсем без цветов.",
    price: 1990,
    inStock: true,
    image: "/images/mug.png",
    details: [
      { label: "Материал", value: "Керамика" },
      { label: "Высота", value: "22 см" },
      { label: "Цвет", value: "Молочный" },
    ],
  },
  {
    id: "teplo",
    sku: "TH-006",
    title: "Плед «Тепло»",
    category: "Текстиль",
    subtitle: "Хлопок · 130 × 170 см",
    description:
      "Большой хлопковый плед с кисточками по краям. Для дивана, кресла и долгих вечеров.",
    price: 3490,
    inStock: true,
    image: "/images/mug.png",
    details: [
      { label: "Материал", value: "Хлопок" },
      { label: "Размер", value: "130 × 170 см" },
      { label: "Цвет", value: "Бежевый" },
    ],
  },
];