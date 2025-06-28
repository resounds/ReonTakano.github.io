// pages/index.tsx
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { NewsCard } from "../components/NewsCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="news" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-6">こんにちは</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <NewsCard title="イベント出演情報" date="2025-06-25" summary="ライブ出演のお知らせです！" />
          <NewsCard title="新作公開" date="2025-06-20" summary="新しい作品を公開しました。" />
          <NewsCard title="Webサイトをリニューアル" date="2025-06-15" summary="デザインを一新しました。" />
        </div>
      </section>
    </div>
  );
}
