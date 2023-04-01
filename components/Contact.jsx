import React from "react";

const Contact = () => {
  return (
    <div className=" max-w-[1240px] mx-auto p-4 h-screen">
      <h1 className=" font-bold text-2xl text-center p-4">
        Lets work together
      </h1>
      <form className=" max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Name"
            className=" border shadow-lg p-3"
          />
          <input
            type="email"
            placeholder="Email"
            className=" border shadow-lg p-3"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className=" border shadow-lg p-3 w-full my-2"
        />
        <textarea
          cols="30"
          rows="10"
          className=" border shadow-lg p-3 w-full"
          placeholder="Message"
        ></textarea>
        <button className=" border shadow-lg p-3 w-full">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
