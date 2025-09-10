import Container from "@/components/shared/Container";
import heroImage from "../../../assets/Section → Main → Section.png"
import Navbar from "../Navbar/Navbar";

const Banner = () => {
    return (
        <div className=" relative">

            <img src={heroImage} alt="" width={"100%"} height={"900px"} />
<Container>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
            <Navbar/>
          </div>
</Container>

        </div>
    );
};

export default Banner;