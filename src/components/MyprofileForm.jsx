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
    info.set("nameS", data.name);
    info.set("emailS", data.email);
    info.set("phoneS", data.phone);
    info.set("file", data.file);

    axios
      .put(`http://localhost:8000/api/v1/user/${id}`, info, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        navigate("/profile"); // Move this line here
      })
      .catch((er) => alert(er.response.data.error));

    console.log(token);
  };
  const onFileChange = (event) => {
    setData({
      ...data,
      file: event.target.files[0],
    });
  };
  return (
    <div className=" flex justify-center mt-12">
      <form>
        <div className="mx-auto  flex flex-col">
          id : {id}
          <input
            onChange={onInputChange}
            type="text"
            name="nameS"
            placeholder={name}
            value={data.name}
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            onChange={onInputChange}
            type="text"
            name="emailS"
            placeholder={email}
            value={data.email}
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            onChange={onInputChange}
            type="text"
            name="phoneS"
            value={data.phone}
            placeholder={phone}
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            onChange={onFileChange}
            type="file"
            className="file-input file-input-bordered w-[320px] my-4 mr-4"
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
