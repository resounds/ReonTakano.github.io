import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationItem {
    name: string;
    href: string;
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navigationItems: NavigationItem[] = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'News', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    const handleMenuToggle = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Resound Space
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navigationItems.map((item: NavigationItem) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="hover:text-pink-400 transition-colors duration-200 relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={handleMenuToggle}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
    )
}
