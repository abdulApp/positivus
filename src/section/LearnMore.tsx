import React from "react";

export default function LearnMore() {
  return (
    <div className="mt-16 w-screen border px-16">
      <div className="w-full h-[500px] flex justify-around items-center border-4 border-b-8 border-black">
        <div className="h-full flex flex-col justify-center gap-4 border-4">
          <h1 className="text-5xl">Let’s make things happen</h1>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button>Get your free proposal</button>
        </div>
        <div className="flex flex-col justify-center gap-4 border">
          <h1 className="text-5xl">Let’s make things happen</h1>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button>Get your free proposal</button>
        </div>
      </div>
    </div>
  );
}
