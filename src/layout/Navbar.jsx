import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, User, X, Instagram, Facebook, Twitter, Youtube, Phone, Mail } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full">
            {/* Top Bar */}
            <div className="hidden md:flex bg-slate-800 text-white text-sm py-2 px-6 justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>(225) 555-0118</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Mail className="w-4 h-4" />
                        <span>michelle.rivera@example.com</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span>Follow Us:</span>
                    <Instagram className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
                    <Youtube className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
                    <Facebook className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
                    <Twitter className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white py-4 px-6 shadow-sm">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800">
                        Bandage
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex flex-col md:flex-row items-center space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Pages</a>
                    </div>

                    {/* Mobile Nav Links */}
                    <div className="flex items-center justify-end gap-4 md:hidden">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <User className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Search className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <ShoppingCart className="w-5 h-5 text-gray-600" />
                        </button>
                        </div>

                        {/* Icons */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href="#" className="text-blue-500">Login / Register</a>
                            <Search className="w-5 h-5 text-blue-500 cursor-pointer" />
                            <ShoppingCart className="w-5 h-5 text-blue-500 cursor-pointer" />
                            <User className="w-5 h-5 text-blue-500 cursor-pointer" />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="block md:hidden p-2" onClick={toggleMenu}>
                            {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="mt-4 space-y-2 block md:hidden">
                            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Home</a>
                            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Product</a>
                            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Pricing</a>
                            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Contact</a>
                        </div>
                    )}
            </nav>
        </div>
    );
};

export default Navbar;


