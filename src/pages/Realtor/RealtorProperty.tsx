import { Button } from "@/components/ui/button";
import icon1 from "../../assets/realtor/icon1.svg.svg"
import icon2 from "../../assets/realtor/icon2.svg.png"
import icon3 from "../../assets/realtor/icon3.svg.svg"
import Container from "@/components/shared/Container";

const RealtorProperty = () => {
  const Property = [
    {
      img: icon1,
      name: "Buy a property",
      details:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      btn: "Find a home",
    },
    {
      img: icon2,
      name: "Sell a property",
      details:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      btn: "Place an ad",
    },
    {
      img: icon3,
      name: "Rent a property",
      details:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      btn: "Find a rental",
    },
  ];

  return (
    <div className="bg-[#EB67531A] py-12">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-2xl font-bold">See how Realtor can help</p>
          <h6 className="text-gray-600">
            Aliquam lacinia diam quis lacus euismod
          </h6>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Property.map((prop, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              {/* Image Center */}
              <div className="flex justify-center items-center w-20 h-20 mb-4 rounded-full bg-gray-100">
                <img
                  src={prop.img}
                  alt={prop.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Details */}
              <h6 className="text-lg font-semibold mb-2">{prop.name}</h6>
              <p className="text-gray-600 text-sm leading-relaxed">
                {prop.details}
              </p>

              {/* Button */}
              <Button className="mt-4 rounded-full px-6">{prop.btn}</Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RealtorProperty;
