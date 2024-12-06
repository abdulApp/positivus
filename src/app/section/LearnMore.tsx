import React from "react";
import Image from "next/image";
import LearnMoreImg from "@/app/assets/LearnMoreImg.png";

export default function LearnMore() {
  return (
    <div className="my-24 w-screen px-16">
      <div className="w-full h-[500px] flex justify-around items-center bg-[#F3F3F3] rounded-3xl">
        <div className="h-full flex flex-col justify-center items-start gap-12">
          <h1 className="text-5xl">Let’s make things happen</h1>
          <p className="text-xl">
            Contact us today to learn more about how our digital<br/>marketing
            services can help your business grow and<br/>succeed online.
          </p>
          <button className="border border-black bg-black text-2xl text-white px-10 py-6 rounded-2xl">Get your free proposal</button>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Image src={LearnMoreImg} alt="Learn More" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
