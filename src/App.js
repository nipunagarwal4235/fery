import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import Stats from "./Components/Stats";
import Contact from "./Components/Contact";
import WhyUs from "./Components/WhyUs";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Team></Team>
      <WhyUs></WhyUs>
      <Stats></Stats>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
