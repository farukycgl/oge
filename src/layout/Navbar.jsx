import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingCart, User, X, Instagram, Facebook, Twitter, Youtube, Phone, Mail } from 'lucide-react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/actions/clientActions';
import { fetchCategories } from '../store/actions/categoryActions';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);

    // Shop'a tıklayınca genel shop sayfasına yönlendirme
    const handleShopClick = () => {
        history.push('/shop');
        setIsDropdownOpen(false); // Açılır menüyü kapat
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.client.user);
    const { categories } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push("/");
    };

    const kadınKategoriler = categories.filter(cat => cat.gender === "k");
    const erkekKategoriler = categories.filter(cat => cat.gender === "e");

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

                        {/* Shop Açılır Menü */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="text-gray-600 hover:text-gray-900 cursor-pointer"
                                onClick={handleShopClick}>
                                Shop ▼
                            </span>
                            {isDropdownOpen && (
                                <div className="absolute left-0 bg-white shadow-lg p-4 w-64 z-50">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-bold">Kadın</h3>
                                            {kadınKategoriler.map(category => (
                                                <Link key={category.id} to={`/shop/kadin/${category.title}/${category.id}`} className="block">
                                                    {category.title}
                                                </Link>
                                            ))}
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Erkek</h3>
                                            {erkekKategoriler.map(category => (
                                                <Link key={category.id} to={`/shop/erkek/${category.title}/${category.id}`} className="block">
                                                    {category.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-900">Blog</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-900">Pages</Link>
                    </div>

                    {/* Mobile Icons */}
                    <div className="flex items-center justify-end gap-4 md:hidden">
                        <User className="w-5 h-5 text-gray-600" />
                        <Search className="w-5 h-5 text-gray-600" />
                        <ShoppingCart className="w-5 h-5 text-gray-600" />
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
                        <Link to="/about" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">About</Link>

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
                                <Link to="/login" className="block py-2 px-4 text-blue-500 hover:bg-gray-100 rounded">Login</Link>
                                <Link to="/signup" className="block py-2 px-4 text-blue-500 hover:bg-gray-100 rounded">Register</Link>
                            </>
                        )}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
