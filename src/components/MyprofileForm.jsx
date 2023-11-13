import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function MyprofileForm({ name, email, phone, id }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: name,
    email: email,
    phone: phone,
  });
  const onInputChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const info = new FormData();
    info.set("name", data.name);
    info.set("email", data.email);
    info.set("phone", data.phone);
    axios
      .put(`http://localhost:8000/api/v1/user/${id}`, info, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("Мэдээлэ амжилттай шинэчлэглдээ");
      })
      .catch((er) => alert(er.response.data.error));
  };

  return (
    <div className=" flex justify-center mt-12">
      <form>
        <div className="mx-auto  flex flex-col">
          id : {id}
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            placeholder={name}
            value={data.name}
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            onChange={onInputChange}
            type="text"
            name="email"
            placeholder={email}
            value={data.email}
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            onChange={onInputChange}
            type="text"
            name="phone"
            value={data.phone}
            placeholder={phone}
            className="input input-bordered w-full max-w-xs my-2"
          />
          <br />
          <button
            onClick={onSubmit}
            className="w-[100px] btn btn-neutral my-4  p-4"
          >
            шинэчлэх
          </button>
        </div>
      </form>
    </div>
  );
}
