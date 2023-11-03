import React from "react";

export default function MyprofileForm() {
  return (
    <div className="flex  my-12  ml-12 justify-center  max-w-[500px]">
      <div>
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
        <button className="w-[100px] btn btn-neutral">Neutral</button>
      </div>
    </div>
  );
}
