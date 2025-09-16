import heroImage from "../../../assets/Section → Main → Section.png";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-auto object-cover"
      />

      {/* Navbar Overlay */}
      <div className="absolute top-0 left-0 right-0">
        
          <Navbar />
        
      </div>
    </div>
  );
};

export default Banner;
