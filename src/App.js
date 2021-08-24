import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Egg from "./components/Egg";
import Standing from "./components/Standing";
import Testimonial from "./components/Testimonial";
import Double from "./components/Double";
import Image from "./components/Image";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="m-auto md:max-w-screen-2xl">
      <div className="h-screen bg-header bg-cover md:bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <Egg />
      <Standing />
      <Double />
      <Testimonial />
      <Image />
      <Footer />
    </div>
  );
}

export default App;
