import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
       {/* <img src="../Elevate.JPG" alt="E-commerce" className="mx-auto h-full w-full"  /> */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl sm:text-5xl text-center lg:text-left font-extrabold leading-tight mb-8">
           <div>
           <span className="block sm:inline text-purple-500">
              Elevate Your Style,
            </span>
            <br className="hidden lg:inline" />
            <span className="block sm:inline text-pink-500">
              Simplify Your Life
            </span>
           </div>
          </h1>

          <p className="mb-8 leading-relaxed font-serif text-green-600">
            Welcome to our fashion-forward online store, where style meets
            affordability. Explore a curated collection of the latest trends and
            timeless classics, all designed to elevate your wardrobe. Our
            mission is to provide you with a seamless shopping experience,
            offering a wide range of high-quality products at competitive
            prices.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://blog-frontend.envato.com/cdn-cgi/image/width=2560,quality=75,format=auto/uploads/sites/2/2022/04/E-commerce-App-JPG-File-scaled.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
