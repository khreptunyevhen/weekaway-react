import bg from "../images/hero/hero-bg.jpg";

function Hero() {
  return (
    <div className="relative w-full h-[90vh]">
      <img
        className="w-full h-full object-cover"
        src={bg}
        alt="weekaway beach"
      />
      <div className="max-w-[1140px] mx-auto">
        <div className="absolute top-[40%] z-[5] w-full h-full text-white flex flex-col p-4 max-w-[600px] md:-[50%]">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With weekaway</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sed
            aliquid ratione reiciendis repudiandae quaerat consectetur ab, est
            magnam amet voluptatibus voluptatem debitis non laudantium dolorem
            nulla doloribus dolores? Aspernatur.
          </p>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 w-full h-full bg-gray-900/20"></div>
    </div>
  );
}

export default Hero;
