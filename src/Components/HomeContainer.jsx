import React from "react";
import deliveryImg from "../img/delivery.png";
import heroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
        <div className="flex items-center justify-center gap-2 bg-orange-100 rounded-full px-2 py-1">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={deliveryImg}
              alt="Bike"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[3rem] text-headingColor font-bold tracking-normal">
          The fastest delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4rem]">
            Your City
          </span>{" "}
        </p>

        <p className="text-base text-textColor md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet, fuga
          tempore ipsam odit aperiam harum neque minima. Rerum illum pariatur
          voluptatum asperiores! Repellendus quibusdam sapiente omnis saepe
          exercitationem atque aut voluptatem ea nisi cum?
        </p>
        <div>
          <button className="bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-100 ease-in-out">
            Order Now
          </button>
        </div>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={heroBg}
          alt="Hero BG"
          className="ml-auto h-420 lg:h-600 w-full lg:w-auto"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-160  p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-30 -mt-5 lg:-mt-10 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
