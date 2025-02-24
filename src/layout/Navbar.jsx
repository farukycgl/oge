import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, User, X, Instagram, Facebook, Twitter, Youtube, Phone, Mail } from 'lucide-react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/actions/clientActions';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // logout işlemi için
    const user = useSelector((state) => state.client.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = () => {
        dispatch(logoutUser())
        history.push("/")
    }

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
                        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                        <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-900">Blog</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-900">Pages</Link>
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


                    {/* Icons and User Profile */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <>
                                <img src={user.avatarUrl || "/placeholder.svg"} alt={user.name} className="w-8 h-8 rounded-full" />
                                <span className="text-gray-600">{user.name}</span>
                                <button onClick={handleLogout} className="text-blue-500 hover:text-blue-700">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-blue-500">Login</Link>
                                <span>/</span>
                                <Link to="/signup" className="text-blue-500">Register</Link>
                            </>
                        )}

                        <Search className="w-5 h-5 text-blue-500 cursor-pointer" />
                        <ShoppingCart className="w-5 h-5 text-blue-500 cursor-pointer" />
                        {!user && <User className="w-5 h-5 text-blue-500 cursor-pointer" />}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="block md:hidden p-2" onClick={toggleMenu}>
                        {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mt-4 space-y-2 block md:hidden">
                        <Link to="/" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Home</Link>
                        <Link to="/shop" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Shop</Link>
                        <Link to="/product" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Product</Link>
                        <Link to="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Pricing</Link>
                        <Link to="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Contact</Link>
                        <Link to="/about" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">About</Link>

                        {/* Mobile login user profile */}
                        {user ? (
                            <>
                                <div className="py-2 px-4 text-gray-600">{user.name}</div>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left py-2 px-4 text-blue-500 hover:bg-gray-100 rounded"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="block py-2 px-4 text-blue-500 hover:bg-gray-100 rounded">
                                    Login
                                </Link>
                                <Link to="/signup" className="block py-2 px-4 text-blue-500 hover:bg-gray-100 rounded">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;


