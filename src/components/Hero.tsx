export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">Простые вещи для дома</span>
        <h1 className="hero__title">
          Дом, в который
          <br />
          хочется вернуться.
        </h1>
        <p className="hero__text">
          Керамика, мягкий текстиль и детали, которые делают каждый день немного
          уютнее.
        </p>
        <a href="/catalog" className="button">
          Перейти в каталог
        </a>
      </div>

      <img
        className="hero__image"
        src="/images/mug.png"
        alt="Уютная гостиная с диваном, пледом и керамической вазой"
      />
    </section>
  );
}