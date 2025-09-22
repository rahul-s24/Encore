import React from "react";
import { InstagramIcon, TwitterIcon, FacebookIcon } from "./icons";

const Footer = () => (
  <footer className="bg-dark-gray border-t border-white/10">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold mb-2">Encore</h3>
          <p className="text-light-gray">Live Music, Reimagined.</p>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-off-white mb-4">Encore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-light-gray hover:text-off-white transition">About Us</a></li>
              <li><a href="#" className="text-light-gray hover:text-off-white transition">Careers</a></li>
              <li><a href="#" className="text-light-gray hover:text-off-white transition">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-off-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-light-gray hover:text-off-white transition">Help Center</a></li>
              <li><a href="#" className="text-light-gray hover:text-off-white transition">Contact Us</a></li>
              <li><a href="#" className="text-light-gray hover:text-off-white transition">Cancellation Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-off-white mb-4">Sellers</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-light-gray hover:text-off-white transition">How to Sell</a></li>
              <li><a href="#" className="text-light-gray hover:text-off-white transition">Pricing</a></li>
              <li><a href="#" className="text-light-gray hover:text-off-white transition">Seller Guarantee</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-light-gray text-sm">
        <p>&copy; 2025 Encore. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-off-white transition"><InstagramIcon /></a>
          <a href="#" className="hover:text-off-white transition"><TwitterIcon /></a>
          <a href="#" className="hover:text-off-white transition"><FacebookIcon /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
