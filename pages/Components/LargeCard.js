import Image from "next/image";
import React from "react";

function LargeCard({ img, description, title, buttonText }) {
  return (
    <section className=" relative cursor-pointer py-16 ">
      <div className=" relative min-w-[300px] h-96">
        <Image
          alt="#"
          src={img}
          fill
          objectFit="cover"
          className=" rounded-2xl hover:scale-105 transition duration-300"
        />
      </div>
      <div className=" absolute top-32 left-12">
        <h3 className=" text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className=" text-sm text-white bg-gray-900 py-2 px-2 rounded-lg mt-10 hover:scale-105 transition duration-300">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
