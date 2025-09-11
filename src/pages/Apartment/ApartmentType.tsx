import Container from "@/components/shared/Container";
import t1 from "../../assets/apperment/type1.jpg.png";
import t2 from "../../assets/apperment/type2.jpg.png";
import t3 from "../../assets/apperment/type3.jpg.png";
import t4 from "../../assets/apperment/type4.jpg.png";
import t5 from "../../assets/apperment/type5.jpg.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";

const ApartmentType = () => {
  const apartmentTypes = [
    { img: t1, name: "House", property: 7 },
    { img: t2, name: "Apartment", property: 4 },
    { img: t3, name: "Office", property: 3 },
    { img: t4, name: "Villa", property: 4 },
    { img: t5, name: "Townhome", property: 2 },
  ];

  return (
    <Container>
      <section className="pt-20">
        <p className="text-secondary-foreground font-semibold text-2xl">
          Discover Our Featured Listings
        </p>
        <div className="flex justify-between items-center mt-2">
          <h1 className="text-muted-foreground">
            Aliquam lacinia diam quis lacus euismod
          </h1>
          <Button variant="ghost" className="font-semibold hover:bg-primary">
            See All Properties <GoArrowUpRight className="ml-1" />
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-6 ">
        {apartmentTypes.map((item, index) => (
          <Card
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <CardHeader className="p-0">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-50 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-muted-foreground">
                {item.property} Properties
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
              <div className=" ">
          <p className=" text-4xl text-center"><span className="text-9xl items-center">.</span>.....</p>
        </div>
    </Container>
  );
};

export default ApartmentType;
