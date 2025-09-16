import { useState } from "react";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { Menu, X } from "lucide-react";
import arrow from "../../../assets/arrow.png";
import Container from "@/components/shared/Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
         <header className="w-full md:py-4 mx-auto bg-transparent">
      <div className="flex justify-between items-center h-20 ">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl">
          <House className="h-6 w-6 p-1 rounded-2xl bg-primary text-secondary" />
          <span className="text-secondary">homez</span>
        </a>

        {/* Desktop Menu */}
  <ul className="hidden md:flex text-secondary gap-2">
  <li>
    <a
      href="/"
      className="flex items-center gap-1 px-2 py-2 font-medium hover:text-primary underline-offset-8 underline"
    >
      Home
      <img src={arrow} alt="" className="w-3 h-3" />
    </a>
  </li>
  <li>
    <a
      href="/"
      className="flex items-center gap-1 px-2 py-2 font-medium hover:text-primary"
    >
      Listings
      <img src={arrow} alt="" className="w-3 h-3" />
    </a>
  </li>
  <li>
    <a
      href="/"
      className="flex items-center gap-1 px-2 py-2 font-medium hover:text-primary"
    >
      Members
      <img src={arrow} alt="" className="w-3 h-3" />
    </a>
  </li>
  <li>
    <a
      href="/"
      className="flex items-center gap-1 px-2 py-2 font-medium hover:text-primary"
    >
      Blog
      <img src={arrow} alt="" className="w-3 h-3" />
    </a>
  </li>
  <li>
    <a
      href="/"
      className="flex items-center gap-1 px-2 py-2 font-medium hover:text-primary"
    >
      Pages
      <img src={arrow} alt="" className="w-3 h-3" />
    </a>
  </li>
</ul>


       
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-secondary">
            <BiUserCircle className="mr-1" /> Login / Register
          </Button>
          <Button className="bg-secondary hover:bg-primary text-secondary-foreground">
            Add Property <GoArrowUpRight className="ml-1" />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col  shadow-md px-6  gap-3">
          <a href="/" className="font-medium text-secondary hover:text-primary">
            Home
          </a>
          <a href="/" className="font-medium text-secondary hover:text-primary">
            Members
          </a>
          <a href="/" className="font-medium text-secondary hover:text-primary">
            Blog
          </a>
          <a href="/" className="font-medium text-secondary hover:text-primary">
            Pages
          </a>

          <Button variant="ghost" className="text-secondary w-full justify-start">
            <BiUserCircle className="mr-1" /> Login / Register
          </Button>
          <Button className="bg-secondary hover:bg-primary text-secondary-foreground w-full">
            Add Property <GoArrowUpRight className="ml-1" />
          </Button>
        </div>
      )}
    </header>
    </Container>


 
  );
};

export default Navbar;
