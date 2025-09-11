import Container from "@/components/shared/Container";
import t1 from "../../assets/apperment/type1.jpg.png";
import t2 from "../../assets/apperment/type2.jpg.png";
import t3 from "../../assets/apperment/type3.jpg.png";
import t4 from "../../assets/apperment/type4.jpg.png";
import t5 from "../../assets/apperment/type5.jpg.png";
import t6 from "../../assets/apperment/type6.jpg.png";

const Apartment = () => {
  return (
    <Container>
      <div className="space-y-6 pt-20 pb-20">
        
        <div className="text-center space-y-2">
          <p className="text-2xl font-bold">Explore Apartment Types</p>
          <h6 className="text-gray-600">
            Aliquam lacinia diam quis lacus euismod
          </h6>
        </div>

       
        <section className="grid grid-cols-8 gap-4">
         
          <div className="col-span-4 relative overflow-hidden rounded-xl">
            <img src={t1} alt="Type 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 p-6 text-secondary">
              <p className="text-lg font-semibold">House</p>
              <p className="text-sm">7 Properties</p>
            </div>
          </div>

        
          <div className="col-span-2 relative overflow-hidden rounded-xl">
            <img src={t2} alt="Type 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 p-6 text-secondary">
              <p className="text-lg font-semibold">Apartment</p>
              <p className="text-sm">3 Properties</p>
            </div>
          </div>

       
          <div className="col-span-2 relative overflow-hidden rounded-xl">
            <img src={t3} alt="Type 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 p-6 text-secondary ">
              <p className="text-lg font-semibold">Office</p>
              <p className="text-sm">4 Properties</p>
            </div>
          </div>
        </section>

        
             <section className="grid grid-cols-8 gap-4">
        
          <div className="col-span-2 relative overflow-hidden rounded-xl">
            <img src={t4} alt="Type 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 p-6 text-secondary">
              <p className="text-lg font-semibold">Townhome</p>
              <p className="text-sm">7 Properties</p>
            </div>
          </div>

       
          <div className="col-span-2 relative overflow-hidden rounded-xl">
            <img src={t5} alt="Type 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 p-6 text-secondary">
              <p className="text-lg font-semibold">Villa</p>
              <p className="text-sm">3 Properties</p>
            </div>
          </div>

         
          <div className="col-span-4 relative overflow-hidden rounded-xl">
            <img src={t6} alt="Type 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 p-6 text-secondary">
              <p className="text-lg font-semibold">Bungalow</p>
              <p className="text-sm">4 Properties</p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Apartment;
