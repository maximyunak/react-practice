import Hero from "../components/Hero.tsx";
import Subscribe from "../components/Subscribe.tsx";

export const HomePage = () => {
  return (
    <div className="home">
      <main className="home__main container">
        <Hero />
        <Subscribe />
      </main>
    </div>
  )
}
