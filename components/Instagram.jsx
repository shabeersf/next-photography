import React from "react";
import Insta1 from "../public/assets/insta1.jpg";
import Insta2 from "../public/assets/insta2.jpg";
import Insta3 from "../public/assets/insta3.jpg";
import Insta4 from "../public/assets/insta4.jpg";
import Insta5 from "../public/assets/insta5.jpg";
import Insta6 from "../public/assets/insta6.jpg";
import Insta7 from "../public/assets/insta7.jpg";
import Insta8 from "../public/assets/insta8.jpg";
import Insta9 from "../public/assets/insta9.jpg";
import Instagramimg from "./Instagramimg";

const Instagram = () => {
  return (
    <div className=" max-w-[1240px] mx-auto py-24 text-center ">
      <p className="text-2xl font-bold ">Follow me on Instagram</p>
      <p className="pb-4">@captur</p>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <Instagramimg socialImg={Insta1} />
        <Instagramimg socialImg={Insta2} />
        <Instagramimg socialImg={Insta6} />
        <Instagramimg socialImg={Insta4} />
        <Instagramimg socialImg={Insta5} />
        <Instagramimg socialImg={Insta7} />
        <Instagramimg socialImg={Insta3} />
        <Instagramimg socialImg={Insta8} />
        <Instagramimg socialImg={Insta9} />
      </div>
    </div>
  );
};

export default Instagram;
