import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";

const CopyRight = () => {
  return (
    <div className="flex justify-between items-center py-4 border-t text-sm text-secondary">
    
      <div className="flex items-center gap-2">
      
    
        <span> @ Homez– All rights reserved</span>
      </div>

    
      <div className="flex items-center gap-4">
        <span className="text-muted-foreground">Follow Us</span>
        <a
          href="#"
          aria-label="Facebook"
          className="text-secondary hover:text-primary transition"
        >
          <FaFacebookF className="text-white" size={18} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className=" hover:text-primary transition"
        >
          <CiTwitter className="text-white" size={20} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="text-secondary hover:text-primary transition"
        >
          <RiInstagramFill className="text-white" size={20} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-secondary hover:text-primary transition"
        >
          <TiSocialLinkedin className="text-white" size={20} />
        </a>
      </div>
    </div>
  );
};

export default CopyRight;
