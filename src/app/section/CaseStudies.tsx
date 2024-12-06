import React from "react";
import Image from "next/image";
import arrowerIcon from "@/app/assets/icons/arrower.svg";

export default function CaseStudies() {
  return (
    <div className="my-24 w-screen px-16">
      <div className="w-full inline-flex items-center gap-20 py-12">
        <h1 className="bg-[#B9FF66] rounded-xl text-5xl px-1.5 py-0.5">
          Case Studies
        </h1>
        <p className="text-3xl">
          Explore Real-Life Examples of Our Proven Digital Marketing
          <br />
          Success through Our Case Studies
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center p-12 bg-black rounded-3xl">
        <div className="w-full h-full flex flex-col justify-between gap-12 px-16">
          <p className="text-white text-3xl">
            For a local restaurant, we
            <br />
            implemented a targeted PPC
            <br />
            campaign that resulted in a 50%
            <br />
            increase in website traffic and a<br />
            25% increase in sales.
          </p>
          <a
            href=""
            className="text-[#B9FF66] text-4xl inline-flex items-center gap-4"
          >
            Learn More <Image src={arrowerIcon} alt="arrower icon" />
          </a>
        </div>
        <div className="w-full h-full flex flex-col justify-between gap-12 px-16 border-r border-l">
          <p className="text-white text-3xl">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a
            href=""
            className="text-[#B9FF66] text-4xl inline-flex items-center gap-4"
          >
            Learn More <Image src={arrowerIcon} alt="arrower icon" />
          </a>
        </div>
        <div className="w-full h-full flex flex-col justify-between gap-12 px-16">
          <p className="text-white text-3xl">
            For a national retail chain, we created a social media
            <br />
            marketing campaign that increased followers by 25% and generated a
            20% increase in online sales.
          </p>
          <a
            href=""
            className="text-[#B9FF66] text-4xl inline-flex items-center gap-4"
          >
            Learn More <Image src={arrowerIcon} alt="arrower icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
