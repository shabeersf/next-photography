import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className=" max-w=[1240px] mx-auto py-16 text-center ">
      <h1 className=" font-bold text-2xl p-4">Travel Photos</h1>
      <div className=" grid grid-rows-none  md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2 ">
          <Image
            src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80"
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className=" w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="/"
          />
        </div>
        <div className=" w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="/"
          />
        </div>
        <div className=" w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="/"
          />
        </div>
        <div className=" w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1535747790212-30c585ab4867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
