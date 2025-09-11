import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import p2 from "../../assets/featured/p2-570x370.jpg.png";
import p6 from "../../assets/featured/p6-570x370.jpg.png";
import p9 from "../../assets/featured/p9-570x370.jpg.png";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import { GoArrowUpRight } from "react-icons/go";
import PropertySearch from "./Search";


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
    <section className="">
        <PropertySearch />
      </section>
  
      <section className="pt-24">
        <p className="text-secondary-foreground font-semibold text-2xl">Discover Our Featured Listings</p>
        <div className="flex justify-between">
              <h1 className="text-muted-foreground">Aliquam lacinia diam quis lacus euismod</h1>
        <Button variant={"ghost"} className=" font-semibold hover:bg-primary ">See All Propertie<GoArrowUpRight /></Button>
        </div>
    
        <div className="grid grid-cols-3 gap-7 pt-12">
          {featured.map((item) => (
            <Card className="w-full max-w-sm">
              <CardHeader className="relative w-full">
                <img src={item.img} width={"100%"} alt="" />
                
                     <Button className="absolute top-3 left-3 bg-primary/90 hover:bg-primary text-secondary">Featured</Button>
                <p>{item.name}</p>

              </CardHeader>
              <CardContent>
           
              </CardContent>
              <CardFooter className="">
                <div className="flex justify-between gap-2.5">
                  <p> ${item.price}</p>
                  <div className="flex gap-2">
                    <span>....{item.beds}</span>
                    <span>... .{item.bathrooms}</span>
                    <span>. .. .{item.squareFeet}</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="-pt-4  pb-24">
          <p className=" text-4xl text-center"><span className="text-9xl items-center">.</span>.....</p>
        </div>
      </section>
      </Container>
  
    </div>
  );
};

export default Featured;
