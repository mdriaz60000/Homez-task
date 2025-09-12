import b1 from "../../assets/sponsor/Link → b1.jpg.png"
import b2 from "../../assets/sponsor/Link → b2.jpg.png"
import b3 from "../../assets/sponsor/Link → b3.jpg.png"
import b4 from "../../assets/sponsor/Link → b4.jpg.png"
import b5 from "../../assets/sponsor/Link → b5.jpg.png"
import b6 from "../../assets/sponsor/Link → b6.jpg.png"

const Sponsor = () => {
    return (
        <div>
            
       
                <p className=" text-center">
             Trusted by the worlds best
                </p>
                <div className=" flex justify-between">
                    <img src={b1} alt="" />
                    <img src={b2} alt="" />
                    <img src={b3} alt="" />
                    <img src={b4} alt="" />
                    <img src={b5} alt="" />
                    <img src={b6} alt="" />
                </div>
            
        </div>
    );
};

export default Sponsor;

