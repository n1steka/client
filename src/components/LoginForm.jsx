import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function LoginForm() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await axios
      .post("http://localhost:8000/api/v1/user/login", data)
      .then((datas) => {
        setData(datas.data.data);
        localStorage.setItem("token", datas.data.token);
        localStorage.setItem("user", JSON.stringify(datas.data.data));
        console.log(datas);
        navigate("/");
      })
      .catch((er) => alert(er.response.data.error));
  };

  const onInputChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div>
      <div className=" w-full">
        <div className="  flex mx-auto  justify-center mt-[100px] ">
          <div className=" flex-col ">
            <form>
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text"> И-мэйл хаяг </span>
                </label>
                <input
                  onChange={onInputChange}
                  value={data.email}
                  name="email"
                  type="text"
                  placeholder="И-мэйл хаяг оруулна уу !"
                  className="input input-bordered  w-full"
                />
                <label className="label">
                  <span className="label-text-alt">Нууц үг</span>
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text"> Нууц үг оруулна уу ! </span>
                </label>
                <input
                  onChange={onInputChange}
                  value={data.password}
                  name="password"
                  type="password"
                  placeholder="Гарчиг"
                  className="input input-bordered  w-full"
                />
              </div>
            </form>
            <label className="label">
              <span className="label-text-alt"> Нууц үг сэргээх</span>
            </label>
            <button
              onClick={onSubmit}
              className=" flex mx-auto btn btn-active btn-neutral mb-4 mt-4 "
            >
              Нэвтрэх
            </button>
            <a className="   underline" href={"/register"}>
              Бүртгэл үүсгэх
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
