import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Online Shopping */}
          <div>
            <h4 className="footer-heading mb-4">Online Shopping</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=Men" className="text-gray-600 hover:text-pink-500">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/products?category=Women" className="text-gray-600 hover:text-pink-500">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/products?category=Kids" className="text-gray-600 hover:text-pink-500">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/products?category=sale" className="text-gray-600 hover:text-pink-500">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/products?tag=new-arrivals" className="text-gray-600 hover:text-pink-500">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Policies */}
          <div>
            <h4 className="footer-heading mb-4">Customer Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500 font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-pink-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-pink-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-pink-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Useful Links */}
          <div>
            <h4 className="footer-heading mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-pink-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-pink-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-600 hover:text-pink-500">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="/corporate-information" className="text-gray-600 hover:text-pink-500">
                  Corporate Information
                </Link>
              </li>
              <li>
                <Link href="/whitehat" className="text-gray-600 hover:text-pink-500">
                  Whitehat Program
                </Link>
              </li>
            </ul>
          </div>
          
          {/* App & Social */}
          <div>
            <h4 className="footer-heading mb-4">Experience App on Mobile</h4>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png" 
                  alt="Google Play" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto" 
                />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png" 
                  alt="App Store" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto" 
                />
              </Link>
            </div>
            
            <h4 className="footer-heading mb-4">Keep in Touch</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-5">
          <p className="text-sm text-gray-500 text-center">
            © 2025 Myntra Clone. All rights reserved. This is a demo project created for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
