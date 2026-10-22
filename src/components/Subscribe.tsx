import { useState, type FormEvent } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: отправить email на сервер
    console.log('Подписка:', email);
    setEmail('');
  };

  return (
    <section className="subscribe">
      <div className="subscribe__info">
        <h2 className="subscribe__title">Немного уюта в вашей почте</h2>
        <p className="subscribe__text">Новинки и идеи для дома. Только самое тёплое.</p>
      </div>

      <form className="subscribe__form" onSubmit={handleSubmit}>
        <div className="subscribe__row">
          <input
            className="subscribe__input"
            type="email"
            placeholder="Ваш email"
            aria-label="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="button">
            Подписаться
          </button>
        </div>
        <p className="subscribe__note">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
        </p>
      </form>
    </section>
  );
}