import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function ResgisterForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    file: null,
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data.file);
    const info = new FormData();
    info.set("name", data.name);
    info.set("phone", data.phone);
    info.set("email", data.email);
    info.set("password", data.password);
    info.set("file", data.file);
    await axios
      .post("http://localhost:8000/api/v1/user", info, {})
      .then(() => {
        alert("Register done");
      })
      .catch((er) => alert(er.response.data.error));
    navigate("/login");
  };

  const onInputChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const onFileChange = (event) => {
    setData({
      ...data,
      file: event.target.files[0],
    });
  };

  return (
    <div className="flex mx-auto  justify-center mt-[100px] ">
      <div className=" flex-col ">
        <form>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Нэр : </span>
            </label>
            <input
              onChange={onInputChange}
              name="name"
              value={data.name}
              type="text"
              placeholder="Гарчиг"
              className="input input-bordered  w-full"
            />
            <label className="label">
              <span className="label-text"> Утас : </span>
            </label>
            <input
              onChange={onInputChange}
              name="phone"
              value={data.phone}
              type="text"
              placeholder="Гарчиг"
              className="input input-bordered  w-full"
            />
            <label className="label">
              <span className="label-text"> Имэйл : </span>
            </label>
            <input
              onChange={onInputChange}
              name="email"
              value={data.email}
              type="text"
              placeholder="Гарчиг"
              className="input input-bordered  w-full"
            />
            <label className="label">
              <span className="label-text">  Нууц үг : </span>
            </label>
            <input
              onChange={onInputChange}
              name="password"
              value={data.password}
              type="password"
              placeholder="Нууц үг :  "
              className="input input-bordered  w-full"
            />{" "}
            {/* <label className="label">
              <span className="label-text"> Имэйл : </span>
            </label>
            <input
              onChange={onInputChange}
              name="title"
              value={data.title}
              type="text"
              placeholder="Гарчиг"
              className="input input-bordered  w-full"
            /> */}
          </div>
          <input
            onChange={onFileChange}
            type="file"
            className="file-input file-input-bordered w-full my-4"
          />
        </form>
        <button
          className=" flex mx-auto btn btn-active btn-neutral mb-4 "
          onClick={onSubmit}
        >
           Бүртгэл үүсгэх
        </button>
      </div>
    </div>
  );
}
