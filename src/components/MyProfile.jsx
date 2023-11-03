import React from "react";
import MyprofileForm from "./MyprofileForm";

export default function MyProfile() {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-[200px] rounded-full">
            <img src={`http://localhost:8000/uploads/${userInfo.photo}`} />
          </div>
        </div>
      </div>
      <MyprofileForm />
    </div>
  );
}
