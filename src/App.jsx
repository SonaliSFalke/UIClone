import { useState } from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import LogoType from './Components/LogoType'
import Services from './Components/Services'
import Card from './Components/Card'
import Card1 from './Images/card-1.jpg'
import Card2 from './Images/card-2.jpg'
import AccordionList from './Components/AccordianList'
// import TestimonialSlider from './Components/TestimonialSlider'
import Testomonial from './Components/Testomonial'
import Footer from './Components/Footer'
import './App.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const cardsData = [
  {
    title: 'Search engine  optimization',
    description: '',
    image: Card1,
    backgroundColor : 'bg-green-200'
  },
  {
    title: 'Pay-per-click advertising',
    description: '',
    image: Card2,
  },
];
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
     <Header />
     <HeroSection />
     <LogoType />
     <Services  head="Services" para = {`At our digital marketing agency, we offer a range of services to \nhelp businesses grow and succeed online. These services include:`}/>
     <div className="flex flex-col sm:flex-row gap-6 justify-center  items-center">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}

    </div>

    <Services head="Our Working Process " para ={`Step-by-Step Guide to Achieving \n Your Business Goals`} />
    <AccordionList />
    <Services head="Testimonials " para ={`Hear from Our Satisfied Clients: Read Our Testimonials \n to Learn More about Our Digital Marketing Services`}/>
    {/* <TestimonialSlider /> */}
    <Testomonial />
      <Footer />
    </div>
  )
}

export default App
