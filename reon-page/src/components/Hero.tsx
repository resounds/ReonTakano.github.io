// components/Hero.tsx
export default function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-[url('/hero.jpg')]">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold animate-fade-in">
          ようこそ、私の世界へ
        </h1>
      </div>
    </div>
  );
}
