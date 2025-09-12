import Container from "@/components/shared/Container";
import p1 from "../../assets/deals/p14-570x370.jpg.png"
import p2 from "../../assets/deals/p1-570x370.jpg.png"
import p3 from "../../assets/deals/p13-570x370.jpg.png"
import p4 from "../../assets/deals/p4-570x370.jpg.png"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Deals = () => {
    const apartmentTypes = [
    { img: p1, name: "House", property: 7 },
    { img: p2, name: "Apartment", property: 4 },
    { img: p3, name: "Office", property: 3 },
    { img: p4, name: "Villa", property: 4 },
    
  ];
    return (
        <div className="bg-primary">
             <Container>
      <section className="pt-20 ">
        <p className="text-secondary-foreground font-semibold text-2xl">
          Discover Our Featured Listings
        </p>
        <div className="flex justify-between items-center mt-2">
          <h1 className="text-muted-foreground">
            Aliquam lacinia diam quis lacus euismod
          </h1>
          <div  className="flex gap-4">
          <Button  className="font-semibold text-primary bg-secondary">
            For Rent
          </Button>
          <Button  className="font-semibold ">
            For Sale
          </Button>
          </div>

        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6 pb-20 ">
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

    </Container>
        </div>
    );
};

export default Deals;