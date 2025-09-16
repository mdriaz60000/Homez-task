import m1 from "../../assets/realtor/m9.jpg.png"
import m2 from "../../assets/realtor/m10.jpg.png"
import m3 from "../../assets/realtor/m13.jpg.png"
import Container from "@/components/shared/Container"

const RealtorPeople = () => {
    const realtor = [
        {
            img: m1,
            name: "Ali Tufan",
            post: "Marketing",
            details: "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatumdeleniti atque corrupti "
        },
        {
            img: m2,
            name: "Albert Flores",
            post: "Designer",
            details: "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatumdeleniti atque corrupti "
        },
        {
            img: m3,
            name: "Robort Fox",
            post: "Developer",
            details: "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatumdeleniti atque corrupti "
        },
    ]

    return (
        <div>
            <Container>
        <div className="text-center mb-10">
          <p className="text-2xl font-bold">See how Realtor can help</p>
          <h6 className="text-gray-600">
            Aliquam lacinia diam quis lacus euismod
          </h6>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
{
            realtor.map((item, index) => (
                <div key={index} className=" shadow p-8 mb-4">
                    <div className=" flex item-center mb-2">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                     <p className="font-bold">{item.name}</p>
                     <p className="text-gray-600">{item.post}</p>
                  </div>

                    </div>
  
                    <div>

                        <p className="text-gray-500">{item.details}</p>
                    </div>
                </div>
            ))
}
        </section>
            </Container>


        </div>
    );
};

export default RealtorPeople;