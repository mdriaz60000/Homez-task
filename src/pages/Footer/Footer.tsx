import Container from "@/components/shared/Container";
import NewsLater from "./NewsLater";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import CopyRight from "./CopyRight";
import { House } from "lucide-react";

const Footer = () => {
    return (
        <div className=" bg-secondary-foreground text-secondary">
            <Container >
        <NewsLater />
        <div>
        <footer className="  py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-500 rounded-full" />
             <House className="h-6 w-6 bg-red-500  p-1 rounded-full text-white" />
       
            <span className="text-xl font-bold">homez</span>
          </div>
          <p className="mb-2 font-semibold">
            789 Queensberry Street, North Melbourne VIC 3051, Australia.
          </p>
          <p className="mb-2">Total Free Customer Care</p>
          <p className="mb-2 font-semibold">+(088) 123 456 789</p>
          <p className="mb-1">Live Support?</p>
          <p className="font-semibold">hi@homez.com</p>
        </div>

        {/* Popular Search */}
        <div>
          <h4 className="text-white font-semibold mb-4">Popular Search</h4>
          <ul className="space-y-2">
            <li>Apartment for Sale</li>
            <li>Apartment for Rent</li>
            <li>Offices for Sale</li>
            <li>Offices for Rent</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Pricing Plans</li>
            <li>Our Services</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Apps */}
        <div>
          <h4 className="text-white font-semibold mb-4">Apps</h4>
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              <FaApple size={24} />
              <span>
                <small className="block text-xs">Download on the</small>
                <span className="font-semibold">Apple Store</span>
              </span>
            </button>
            <button className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              <FaGooglePlay size={22} />
              <span>
                <small className="block text-xs">Get it on</small>
                <span className="font-semibold">Google Play</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
    <CopyRight />
        </div>
            </Container>
            
        </div>
    );
};

export default Footer;