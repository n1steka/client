import React from "react";

export default function MyprofileForm() {
  return (
    <div className=" flex justify-center mt-12">
      <div className="mx-auto  flex flex-col">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs my-2"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs my-2"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs my-2"
        />{" "}
        <br />
        <button className="w-[100px] btn btn-neutral my-4">Neutral</button>
      </div>
    </div>
  );
}
