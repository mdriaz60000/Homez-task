import Apartment from "./pages/Apartment/Apartment"
import ApartmentType from "./pages/Apartment/ApartmentType"
import BayAndSell from "./pages/BayAndSell/BayAndSell"
import Blog from "./pages/Blog/Blog"
import Deals from "./pages/Deals/Deals"
import Featured from "./pages/Featured/Featured"
import Banner from "./pages/HeroSection/Banner/Banner"
import RealtorPeople from "./pages/Realtor/RealtorPeople"
import RealtorProperty from "./pages/Realtor/RealtorProperty"



function App() {


  return (
    <>
   
    <Banner />
    <Featured />
    <Apartment />
    <RealtorProperty />
    <ApartmentType />
    <BayAndSell />
    <RealtorPeople />
    <Deals />
    <Blog />
    </>
  )
}

export default App
