import React from "react";
import { Instagram, Facebook, Twitter } from 'lucide-react';


const Footer = () => {

    return (
        <div className="flex flex-col ml-5 mt-15">
            <div className="flex flex-col gap-4">
                <div>
                    <h1>Bandage</h1>
                </div>
                <div className="flex text-blue-400 gap-4">
                    <Facebook className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
                    <Instagram className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
                    <Twitter className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
                </div>
            </div>

            <section className="flex flex-col gap-5 mt-20">
                <div className="flex flex-col gap-1.5">
                    <h3>Company Info</h3>
                    <a href="">About Us</a>
                    <a href="">Carrier</a>
                    <a href="">We are hiring</a>
                    <a href="">Blog</a>
                </div>
                <div className="flex flex-col gap-1.5">
                    <h3>Legal</h3>
                    <a href="">About Us</a>
                    <a href="">Carrier</a>
                    <a href="">We are hiring</a>
                    <a href="">Blog</a>
                </div>
                <div className="flex flex-col gap-1.5">
                    <h3>Features</h3>
                    <a href="">Business Marketing</a>
                    <a href="">User Analytic</a>
                    <a href="">Live Chat</a>
                    <a href="">Unlimited Support</a>
                </div>
                <div className="flex flex-col gap-1.5">
                    <h3>Resources</h3>
                    <a href="">IOS & Android</a>
                    <a href="">Watch a Demo</a>
                    <a href="">Customers</a>
                    <a href="">API</a>
                </div>
                <div className="flex flex-col gap-1.5">
                    <h3>Get In Touch</h3>
                </div>
                <div>
                    <input type="text" placeholder="Your Email" />
                    <button className="bg-blue-400 text-white">Subscribe</button>
                    <p>Lütfen mail adresinizi giriniz!</p>
                </div>
            </section>

            <footer className="flex justify-center text-[#737373] mt-20 mb-5">
                <p className="font-bold">Made With Love By Finland All Right Reserver</p>
            </footer>
        </div>
    )
}

export default Footer;
