import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}

interface Skill {
  category: string;
  items: string[];
}

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // サンプルデータ - 実際のデータに置き換えてください
  const projects: Project[] = [
    {
      id: 1,
      title: "Eコマースプラットフォーム",
      description: "React、Node.js、MongoDBを使用したフルスタックのEコマースアプリケーション。ユーザー認証、決済機能、管理者パネルを実装。",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://example-ecommerce.com"
    },
    {
      id: 2,
      title: "タスク管理アプリ",
      description: "TypeScriptとNext.jsで構築された生産性向上アプリ。ドラッグ&ドロップ機能、リアルタイム同期、チーム協業機能を搭載。",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/example/taskmanager"
    },
    {
      id: 3,
      title: "データ分析ダッシュボード",
      description: "D3.jsとReactを使用したインタラクティブなデータ可視化ダッシュボード。リアルタイムデータの表示と分析機能。",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      liveUrl: "https://example-dashboard.com"
    }
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      company: "KDDIアジャイル開発センター株式会社",
      position: "ソフトウェアエンジニア",
      period: "2025年4月 - 現在",
      description: [
        "クライアント企業のDX推進を支援するため、アジャイル手法（スクラム）での継続的な改善と価値提供を実践",
        "チームでのアジャイル開発（スクラム）に従事し、Webアプリケーションの設計・開発を担当",
        "社内外のステークホルダーと連携しながら、プロダクトの価値向上に貢献",
      ]
    },
    {
      id: 2,
      company: "オリエンタルランド株式会社",
      position: "フードサービスキャスト",
      period: "2024年7月 - 2025年3月",
      description: [
        "パーク内飲食施設(クイーンオブハートのバンケットホール)にて、接客・販売・清掃など多岐にわたる業務を担当",
        "ゲスト体験を第一に考えたホスピタリティの提供",
        "安全・安心なサービスの徹底とチームでの協力によるオペレーション向上"
      ]
    },
    {
      id: 3,
      company: "ダイソーイオンレイクタウン店",
      position: "従業員，夜リーダー",
      period: "2019年12月 - 2024年6月",
      description: [
        "店舗業務全般（品出し・レジ対応・売場作成）に加え、夜間帯のリーダーとして従業員指導と売場管理を担当",
        "顧客対応やクレーム対応など、現場での判断を求められる業務にも対応",
        "業務効率化や新人教育、チームワーク強化に貢献"
      ]
    }
  ];

  const skills: Skill[] = [
    {
      category: "フロントエンド",
      items: ["React", "javaScript", "TypeScript", "Next.js", "CSS", "Tailwind CSS"]
    },
    {
      category: "バックエンド",
      items: ["Node.js", "Python", "FastAPI", "Dynamodb", "Java", "C#"]
    },
    {
      category: "ツール・その他",
      items: ["Git", "Docker", "AWS", "Figma", "Unity"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-950 via-purple-900 to-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-black via-purple-950 to-gray-900/90 backdrop-blur-md shadow-lg z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Portfolio</div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-semibold hover:text-pink-400 transition-colors ${activeSection === section ? 'text-pink-400' : 'text-white/70'}`}
                >
                  {section === 'home' ? 'ホーム' : 
                   section === 'about' ? 'About' :
                   section === 'projects' ? 'プロジェクト' :
                   section === 'experience' ? '経歴' : 'コンタクト'}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-black/95 rounded-xl shadow-lg">
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-2 text-white/80 hover:text-pink-400 font-semibold"
                >
                  {section === 'home' ? 'ホーム' : 
                   section === 'about' ? 'About' :
                   section === 'projects' ? 'プロジェクト' :
                   section === 'experience' ? '経歴' : 'コンタクト'}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-24 bg-gradient-to-r from-gray-950 via-purple-900 to-gray-950 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">鷹野 礼音</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">ソフトウェアエンジニア</p>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">モダンなWeb技術を使用して、ユーザー体験を重視したアプリケーション開発に取り組んでいます。React、TypeScript、Node.jsを中心とした技術スタックで、スケーラブルなソリューションを提供します。</p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105">プロジェクトを見る</button>
              <button onClick={() => scrollToSection('contact')} className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-full font-semibold text-lg hover:bg-pink-400/10 transition-all duration-300">お問い合わせ</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-300">スキルセット</h3>
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-medium text-pink-200 mb-2">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-sm font-semibold">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-300">プロフィール</h3>
                <p className="text-white/80 mb-2">鷹野 礼音（Reon Takano）</p>
                <div className="flex space-x-4 mt-4 mb-6">
                  <a href="#" className="text-white/70 hover:text-pink-400 transition-colors"><Github size={24} /></a>
                  <a href="#" className="text-white/70 hover:text-pink-400 transition-colors"><Linkedin size={24} /></a>
                  <a href="mailto:23amj15@ms.dendai.ac.jp" className="text-white/70 hover:text-pink-400 transition-colors"><Mail size={24} /></a>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-pink-200 mb-1">研究分野</h4>
                    <ul className="list-disc list-inside text-white/80 text-sm">
                      <li>色知覚，色覚</li>
                      <li>画像処理・コンピュータビジョン・機械学習</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-pink-200 mb-1">学歴</h4>
                    <ul className="list-disc list-inside text-white/80 text-sm">
                      <li>2023.04-2025.03: 東京電機大学大学院 修士課程</li>
                      <li>2019.04-2023.03: 東京電機大学 学士課程</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-pink-200 mb-1">受賞</h4>
                    <ul className="list-disc list-inside text-white/80 text-sm">
                      <li><a href="https://www.ieice.org/jpn_r/junior/poster_session_awards.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-400">電子情報通信学会総合大会 優秀ポスター賞, 2023</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-pink-200 mb-1">主な論文・発表</h4>
                    <ul className="list-decimal list-inside text-white/80 text-sm space-y-1">
                      <li><b>R.Takano</b> and Y.Ozasa, "Adapting Indoor Scene Design to User-Selected Mood", Computer Graphics and Image Processing (CGIP), 2024.1</li>
                      <li><b>鷹野礼音</b>，小篠裕子「選択した雰囲気に合わせた空間デザイン」電子情報通信学会総合大会, 2023.3</li>
                      <li><b>鷹野礼音</b>，小篠裕子「選択した雰囲気に合わせた空間デザイン」画像の認識・理解シンポジウム（MIRU）, 2023.7</li>
                      <li>安田瞳，鷹野礼音，小篠裕子「服へのプロジェクションマッピングの定量評価法に関する検討」オーディオビジュアル複合情報処理研究発表会, 2024.2</li>
                      <li><b>鷹野礼音</b>，馬渕佑真，小篠裕子「遺伝的アルゴリズムに基づく選択した雰囲気に合わせた空間デザイン」電子情報通信学会総合大会, 2024.3</li>
                      <li>安田瞳，鷹野礼音，小篠裕子「服へのプロジェクションマッピングにおけるマッピング領域抽出に関する考察」電子情報通信学会総合大会, 2024.3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">職歴</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-8 border-l-4 border-pink-400 pl-6">
                <div className="bg-black/60 p-6 rounded-xl shadow-lg border border-white/10">
                  <h3 className="text-xl font-semibold text-pink-200">{exp.position}</h3>
                  <h4 className="text-lg text-pink-400 mb-2">{exp.company}</h4>
                  <p className="text-white/70 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index} className="text-white/80 flex items-start"><span className="text-pink-400 mr-2">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">プロジェクト</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="rounded-2xl shadow-2xl bg-gradient-to-br from-black/80 to-purple-900/60 border border-white/10 hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300 overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover opacity-90" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-pink-200">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-pink-500/20 text-pink-200 px-2 py-1 rounded text-sm font-semibold">{tech}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="flex items-center text-white/70 hover:text-pink-400 transition-colors"><Github size={16} className="mr-1" />GitHub</a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="flex items-center text-white/70 hover:text-pink-400 transition-colors"><ExternalLink size={16} className="mr-1" />Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/70 p-8 rounded-2xl shadow-2xl border border-white/10">
              <p className="text-center text-white/80 mb-8">プロジェクトのご相談やお仕事のご依頼など、お気軽にお問い合わせください。</p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <Mail className="text-pink-400" size={24} />
                  <span className="text-white/90">resound0902@gmail.com</span>
                </div>
                <div className="flex justify-center space-x-6 mt-8">
                  <a href="#" className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-200 p-3 rounded-full hover:scale-110 hover:bg-pink-500/40 transition-transform"><Github size={20} /></a>
                  <a href="#" className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-200 p-3 rounded-full hover:scale-110 hover:bg-pink-500/40 transition-transform"><Linkedin size={20} /></a>
                  <a href="#" className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-200 p-3 rounded-full hover:scale-110 hover:bg-pink-500/40 transition-transform"><Mail size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-purple-950 to-gray-900/90 backdrop-blur-md py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">&copy; 2025 鷹野礼音. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;