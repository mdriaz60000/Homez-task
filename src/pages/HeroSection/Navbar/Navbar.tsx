import { Button } from "@/components/ui/button"
import { House } from "lucide-react"
import { GoArrowUpRight } from "react-icons/go"
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className=" mx-auto w-full ">
      <div className=" flex justify-around h-22 items-center ">
        {/* Logo */}
        <a href="/" className="flex  items-center gap-2 font-bold text-xl">
          <House className="h-6 w-6 p-1 rounded-2xl  bg-primary text-secondary" />
          <span className="text-secondary">homez</span>
        </a>

    <ul className=" flex text-secondary">
        <li>
            <a
                href="/"
                className="px-3 py-2  font-medium hover:text-primary"
            >
               Home
            </a>
        </li>
        <li>
            <a
                href="/"
                className="px-3 py-2  font-medium hover:text-primary"
            >
               Home
            </a>
        </li>
        <li>
            <a
                href="/"
                className="px-3 py-2 font-medium hover:text-primary"
            >
               Members
            </a>
        </li>
        <li>
            <a
                href="/"
                className="px-3 py-2 font-medium hover:text-primary"
            >
              Blog
            </a>
        </li>
        <li>
            <a
                href="/"
                className="px-3 py-2  font-medium hover:text-primary"
            >
              Pages
            </a>
        </li>
    </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <Button variant={"ghost"} hover:bg-primary  className=" text-secondary">
           <span><BiUserCircle /></span> Login / Register
          </Button>
          <Button className="bg-secondary  hover:bg-primary text-secondary-foreground">
            Add Property <span><GoArrowUpRight /></span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
