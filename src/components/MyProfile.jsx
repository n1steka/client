import React, { useState, useEffect } from "react";
import MyprofileForm from "./MyprofileForm";
import axios from "axios";
export default function MyProfile() {
  const token = localStorage.getItem("token");
  const [userInfo, setuserInfo] = useState([]);
  useEffect(() => {
    axios
      .post(
        "http://localhost:8000/api/v1/user/loginUserInfo",
        {
          status: "1",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setuserInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-[200px] rounded-full">
            <img src={`http://localhost:8000/uploads/${userInfo.photo}`} />
          </div>
        </div>
      </div>
      <MyprofileForm
        id={userInfo._id}
        name={userInfo.name}
        phone={userInfo.phone}
        email={userInfo.email}
      />
    </div>
  );
}
