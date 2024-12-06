import React from "react";
import Image from "next/image";
import arrowerIcon from "@/app/assets/icons/arrower.svg";
import seoImg from "@/app/assets/seoImg.png";
import ppcImg from "@/app/assets/perClick.png";
import socialImg from "@/app/assets/SocialMedia.png";
import EmailMarketing from "@/app/assets/EmailMarketing.png";
import ContentCreation from "@/app/assets/Content.png";
import Analytics from "@/app/assets/Analytics.png";

export default function Services() {
  return (
    <div className="mt-16 w-screen min-h-screen px-16 border">
      <div className="w-full inline-flex items-center gap-20 py-12">
        <h1 className="bg-[#B9FF66] rounded-xl text-5xl py-0.5 px-0.5">
          Services
        </h1>
        <p className="text-3xl">
          At our digital marketing agency, we offer a range of services to
          <br />
          help businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="w-full flex justify-between items-center gap-20 py-8">
        <div className="w-1/2 bg-[#F3F3F3] flex justify-between items-center border-2 border-b-8 border-black rounded-xl p-12">
          <div className="flex flex-col gap-40">
            <h1 className="text-3xl">
              <span className="bg-[#B9FF66] rounded-xl px-0.5 py-0.5">
                Search engine
              </span>
              <br />
              <span className="bg-[#B9FF66] rounded-xl px-0.5 py-0.5">
                optimization (SEO)
              </span>
            </h1>
            <p className="inline-flex items-center gap-4 text-xl">
              <Image src={arrowerIcon} alt="arrower icon" />
              Learn more
            </p>
          </div>
          <div className="w-1/2 h-1/2">
            <Image src={seoImg} width={300} height={300} alt="seo image" />
          </div>
        </div>
        <div className="w-1/2 flex justify-between items-center border-2 border-b-8 border-black rounded-xl p-12 bg-[#B9FF66]">
          <div className="flex flex-col gap-40">
            <h1 className="text-3xl">
              <span className="bg-white rounded-xl px-0.5 py-0.5">
                Pay-per-click
              </span>
              <br />
              <span className="bg-white rounded-xl px-0.5 py-0.5">
                advertising
              </span>
            </h1>
            <p className="inline-flex items-center gap-4 text-xl">
              <Image src={arrowerIcon} alt="arrower icon" />
              Learn more
            </p>
          </div>
          <div className="w-1/2 h-full">
            <Image src={ppcImg} className="w-full h-full" alt="seo image" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-20 py-8">
        <div className="w-1/2 flex justify-between items-center border-2 border-b-8 border-black rounded-xl p-12 bg-black">
          <div className="flex flex-col gap-40">
            <h1 className="text-3xl">
              <span className="bg-white rounded-xl px-1.5 py-0.5">
                Social Media
              </span>
              <br />
              <span className="bg-white rounded-xl px-1.5 py-0.5">
                Marketing
              </span>
            </h1>
            <p className="inline-flex items-center gap-4 text-xl text-white">
              <Image
                src={arrowerIcon}
                className="border border-[#B9FF66] rounded-full"
                alt="arrower icon"
              />
              Learn more
            </p>
          </div>
          <div className="w-1/2 h-full">
            <Image src={socialImg} width={300} height={300} alt="seo image" />
          </div>
        </div>
        <div className="w-1/2  bg-[#F3F3F3] flex justify-between items-center border-2 border-b-8 border-black rounded-xl p-12">
          <div className="flex flex-col gap-40">
            <h1 className="text-3xl">
              <span className="bg-[#B9FF66] rounded-xl px-0.5 py-0.5">
                Email
              </span>
              <br />
              <span className="bg-[#B9FF66] rounded-xl px-0.5 py-0.5">
                Marketing
              </span>
            </h1>
            <p className="inline-flex items-center gap-4 text-xl">
              <Image src={arrowerIcon} alt="arrower icon" />
              Learn more
            </p>
          </div>
          <div className="w-1/2 h-full">
            <Image
              src={EmailMarketing}
              width={320}
              height={320}
              alt="seo image"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-20 py-8">
        <div className="w-1/2 bg-[#B9FF66] flex justify-between items-center border-2 border-b-8 border-black rounded-xl p-12">
          <div className="flex flex-col gap-40">
            <h1 className="text-3xl">
              <span className="bg-white rounded-xl px-0.5 py-0.5">
                Search engine
              </span>
              <br />
              <span className="bg-white rounded-xl px-0.5 py-0.5">
                optimization (SEO)
              </span>
            </h1>
            <p className="inline-flex items-center gap-4 text-xl">
              <Image src={arrowerIcon} alt="arrower icon" />
              Learn more
            </p>
          </div>
          <div className="w-1/2 h-full">
            <Image src={ContentCreation} width={300} height={300} alt="seo image" />
          </div>
        </div>
        <div className="w-1/2 bg-black flex justify-between items-center border-2 border-b-8 border-black rounded-xl p-12">
          <div className="flex flex-col gap-40">
            <h1 className="text-3xl">
              <span className="bg-[#B9FF66] rounded-xl px-0.5 py-0.5">
                Search engine
              </span>
              <br />
              <span className="bg-[#B9FF66] rounded-xl px-0.5 py-0.5">
                optimization (SEO)
              </span>
            </h1>
            <p className="inline-flex text-white items-center gap-4 text-xl">
              <Image src={arrowerIcon} alt="arrower icon" />
              Learn more
            </p>
          </div>
          <div className="w-1/2 h-full">
            <Image src={Analytics} width={300} height={300} alt="seo image" />
          </div>
        </div>
      </div>
    </div>
  );
}
