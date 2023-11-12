import React from "react";

export default function MyprofileForm({ name, email, phone }) {
  return (
    <div className=" flex justify-center mt-12">
      <div className="mx-auto  flex flex-col">
        <input
          type="text"
          placeholder={name}
          className="input input-bordered w-full max-w-xs my-2"
        />
        <input
          type="text"
          placeholder={email}
          className="input input-bordered w-full max-w-xs my-2"
        />
        <input
          type="text"
          placeholder={phone}
          className="input input-bordered w-full max-w-xs my-2"
        />
        <br />
        <button className="w-[100px] btn btn-neutral my-4  p-4">
          шинэчлэх
        </button>
      </div>
    </div>
  );
}
