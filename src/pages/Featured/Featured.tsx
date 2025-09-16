import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/shared/Container";
import PropertySearch from "./Search";

import p2 from "../../assets/featured/p2-570x370.jpg.png";
import p6 from "../../assets/featured/p6-570x370.jpg.png";
import p9 from "../../assets/featured/p9-570x370.jpg.png";

const Featured = () => {
  const featured = [
    {
      name: "House on the Hollywood",
      beds: 6,
      bathrooms: 2,
      squareFeet: 200,
      img: p2,
      price: 4600,
    },
    {
      name: "Comfortable Villa Green",
      beds: 9,
      bathrooms: 9,
      squareFeet: 600,
      img: p6,
      price: 5800,
    },
    {
      name: "Quality House For Sale",
      beds: 10,
      bathrooms: 2,
      squareFeet: 500,
      img: p9,
      price: 2500,
    },
  ];

  return (
    <div className="bg-accent">
      <Container>
        <section>
          <PropertySearch />
        </section>

        {/* Header Section */}
        <section className="md:pt-24">
          <p className="text-secondary-foreground font-semibold text-2xl">
            Discover Our Featured Listings
          </p>
          <div className="flex justify-between items-center">
            <h1 className="text-muted-foreground">
              Aliquam lacinia diam quis lacus euismod
            </h1>
            <Button
              variant="ghost"
              className="font-semibold hover:bg-primary hover:text-white"
            >
              See All Properties <GoArrowUpRight className="ml-1" />
            </Button>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pt-12">
            {featured.map((item, i) => (
              <Card
                key={i}
                className="w-full max-w-sm shadow-lg rounded-2xl overflow-hidden group"
              >
                <CardHeader className="relative p-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button className="absolute top-3 left-3 bg-primary/90 hover:bg-primary text-white text-xs">
                    Featured
                  </Button>
                  <span className="absolute bottom-3 right-3 bg-white text-primary font-bold px-3 py-1 rounded-md shadow">
                    ${item.price}
                  </span>
                </CardHeader>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-secondary-foreground">
                    {item.name}
                  </h3>
                </CardContent>

                <CardFooter className="p-4 border-t">
                  <div className="flex justify-between w-full text-sm text-muted-foreground">
                    <span>{item.beds} Beds</span>
                    <span>{item.bathrooms} Baths</span>
                    <span>{item.squareFeet} sqft</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 pt-12 pb-24">
            <Button variant="outline" size="icon">
              <ChevronLeft />
            </Button>
            <Button variant="default" className="bg-primary text-white">
              1
            </Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
    
            <Button variant="outline">4</Button>
            <Button variant="outline" size="icon">
              <ChevronRight />
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Featured;
