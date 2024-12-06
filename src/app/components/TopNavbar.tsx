"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/app/assets/Icon.svg";

export default function TopNavbarComponent() {
  const [btn, setBtn] = useState("");
  return (
    <div className="fixed top-0 w-full px-10 bg-white">
      <div className="h-full w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="Positivus Logo" width={25} height={25} />
          <h1 className="text-3xl font-bold tracking-widest">Positivus</h1>
        </div>

        <nav className="text-xl">
          <ul className="flex items-center gap-6">
            <li className="cursor-pointer px-4 py-2 rounded-full hover:bg-[#B9FF66]">
              About Us
            </li>
            <li className="cursor-pointer px-4 py-2 rounded-full hover:bg-[#B9FF66]">
              Services
            </li>
            <li className="cursor-pointer px-4 py-2 rounded-full hover:bg-[#B9FF66]">
              Use Cases
            </li>
            <li className="cursor-pointer px-4 py-2 rounded-full hover:bg-[#B9FF66]">
              Pricing
            </li>
            <li className="cursor-pointer px-4 py-2 rounded-full hover:bg-[#B9FF66]">
              Blog
            </li>
          </ul>
        </nav>

        <button
          className={`bg-white text-black border border-r-4 border-b-4 border-black py-4 px-8 rounded-xl shadow-xl 
            `}
          // ${btn}
          type="button"
          //   onClick={() => setBtn("border-b-2 border-r-2")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
