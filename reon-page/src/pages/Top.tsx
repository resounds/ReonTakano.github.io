// import React, { useState, useEffect } from 'react';
// import { Star, Music, Heart, ArrowRight } from 'lucide-react';
// import Header from '../components/Header';

// // Type definitions
// interface Slide {
//     title: string;
//     subtitle: string;
//     bg: string;
//     image: string;
// }

// interface Feature {
//     icon: React.ReactNode;
//     title: string;
//     description: string;
//     color: string;
// }

// interface NavigationItem {
//     name: string;
//     href: string;
// }

// const Top: React.FC = () => {
//     // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//     const [currentSlide, setCurrentSlide] = useState<number>(0);
//     const [scrollY, setScrollY] = useState<number>(0);

//     const navigationItems: NavigationItem[] = [
//         { name: 'Home', href: '#' },
//         { name: 'About', href: '#' },
//         { name: 'Music', href: '#' },
//         { name: 'Gallery', href: '#' },
//         { name: 'News', href: '#' },
//         { name: 'Contact', href: '#' }
//     ];

//     const slides: Slide[] = [
//         {
//             title: "Welcome to My World",
//             subtitle: "夢と音楽が織りなす特別な空間へ",
//             bg: "from-purple-600 via-pink-600 to-blue-600",
//             image: "🎵"
//         },
//         {
//             title: "Latest Projects",
//             subtitle: "最新のプロジェクトをチェック",
//             bg: "from-blue-600 via-purple-600 to-pink-600",
//             image: "✨"
//         },
//         {
//             title: "Join Our Community",
//             subtitle: "鷹野礼音office Fan club",
//             bg: "from-pink-600 via-red-500 to-orange-500",
//             image: "🌟"
//         }
//     ];

//     const features: Feature[] = [
//         {
//             icon: <Music className="text-pink-400" size={48} />,
//             title: "Profile",
//             description: "心に響く楽曲の数々をお楽しみください",
//             color: "from-pink-500/20 to-purple-500/20"
//         },
//         {
//             icon: <Heart className="text-red-400" size={48} />,
//             title: "コミュニティ",
//             description: "ファン同士の温かい交流の場",
//             color: "from-red-500/20 to-pink-500/20"
//         },
//         {
//             icon: <Star className="text-yellow-400" size={48} />,
//             title: "限定コンテンツ",
//             description: "ここでしか見られない特別な内容",
//             color: "from-yellow-500/20 to-orange-500/20"
//         }
//     ];

//     const footerLinks = {
//         links: ['ホーム', 'プロフィール', '音楽', 'ニュース'],
//         support: ['よくある質問', 'お問い合わせ', 'プライバシー', '利用規約'],
//         social: ['🐦', '📷', '🎵', '📺']
//     };

//     useEffect(() => {
//         const handleScroll = (): void => {
//             setScrollY(window.scrollY);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prev: number) => (prev + 1) % slides.length);
//         }, 5000);

//         return () => {
//             clearInterval(interval);
//         };
//     }, [slides.length]);

    

//     const handleSlideChange = (index: number): void => {
//         setCurrentSlide(index);
//     };

//     const generateStars = (): React.ReactNode[] => {
//         return [...Array(20)].map((_, i: number) => (
//             <div
//                 key={i}
//                 className="absolute animate-pulse"
//                 style={{
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                     animationDelay: `${Math.random() * 2}s`,
//                     animationDuration: `${2 + Math.random() * 3}s`
//                 }}
//             >
//                 <Star className="text-white/20" size={Math.random() * 20 + 10} />
//             </div>
//         ));
//     };

//     return (
//         <div className="min-h-screen bg-black text-white overflow-hidden">
//             {/* Navigation */}
//             <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
//                 }`}>
                    
//                 <Header />

//                 {/* Mobile Menu */}
//                 {/* {isMenuOpen && (
//                     <div className="md:hidden bg-black/95 backdrop-blur-md">
//                         <div className="px-4 py-2 space-y-2">
//                             {navigationItems.map((item: NavigationItem) => (
//                                 <a
//                                     key={item.name}
//                                     href={item.href}
//                                     className="block py-2 hover:text-pink-400 transition-colors"
//                                 >
//                                     {item.name}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 )} */}
//             </nav>

//             {/* Hero Section */}
//             <section className="relative h-screen flex items-center justify-center overflow-hidden">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bg} opacity-80`}></div>

//                 {/* Animated Background Elements */}
//                 <div className="absolute inset-0">
//                     {generateStars()}
//                 </div>

//                 <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//                     <div className="text-8xl mb-6 animate-bounce">{slides[currentSlide].image}</div>
//                     <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
//                         {slides[currentSlide].title}
//                     </h1>
//                     <p className="text-xl md:text-2xl mb-8 text-white/80">
//                         {slides[currentSlide].subtitle}
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <button className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
//                             <span className="flex items-center justify-center gap-2">
//                                 始める <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//                             </span>
//                         </button>
//                         <button className="group border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
//                             <span className="flex items-center justify-center gap-2">
//                                 詳しく見る <Music className="group-hover:rotate-12 transition-transform" size={20} />
//                             </span>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Slide Indicators */}
//                 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                     {slides.map((_, index: number) => (
//                         <button
//                             key={index}
//                             className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/30'
//                                 }`}
//                             onClick={() => handleSlideChange(index)}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//                         特別な体験をお届け
//                     </h2>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         {features.map((feature: Feature, index: number) => (
//                             <div
//                                 key={index}
//                                 className={`group p-8 rounded-2xl bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
//                             >
//                                 <div className="mb-6 group-hover:animate-bounce">
//                                     {feature.icon}
//                                 </div>
//                                 <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
//                                 <p className="text-white/70 leading-relaxed">{feature.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-black/80 backdrop-blur-md py-12 border-t border-white/10">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid md:grid-cols-4 gap-8">
//                         <div>
//                             <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
//                                 MySpace
//                             </div>
//                             <p className="text-white/60 leading-relaxed">
//                                 音楽と夢を通じて、特別な体験をお届けします。
//                             </p>
//                         </div>

//                         <div>
//                             <h4 className="font-bold mb-4">リンク</h4>
//                             <div className="space-y-2">
//                                 {footerLinks.links.map((link: string) => (
//                                     <a key={link} href="#" className="block text-white/60 hover:text-pink-400 transition-colors">
//                                         {link}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>

//                         <div>
//                             <h4 className="font-bold mb-4">サポート</h4>
//                             <div className="space-y-2">
//                                 {footerLinks.support.map((link: string) => (
//                                     <a key={link} href="#" className="block text-white/60 hover:text-pink-400 transition-colors">
//                                         {link}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>

//                         <div>
//                             <h4 className="font-bold mb-4">フォロー</h4>
//                             <div className="flex space-x-4">
//                                 {footerLinks.social.map((icon: string, index: number) => (
//                                     <a
//                                         key={index}
//                                         href="#"
//                                         className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
//                                         aria-label={`Social media link ${index + 1}`}
//                                     >
//                                         {icon}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
//                         <p>&copy; 2025 MySpace. All rights reserved.</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Top;