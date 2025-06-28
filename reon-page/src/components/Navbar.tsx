// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MySite</div>
        <ul className="space-x-4 hidden md:flex">
          <li><a href="#profile" className="hover:text-blue-500">プロフィール</a></li>
          <li><a href="#works" className="hover:text-blue-500">作品</a></li>
          <li><a href="#news" className="hover:text-blue-500">ニュース</a></li>
          <li><a href="#contact" className="hover:text-blue-500">お問い合わせ</a></li>
        </ul>
      </div>
    </nav>
  );
}
