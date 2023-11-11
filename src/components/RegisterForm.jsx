import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ResgisterForm() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState({
    title: "",
    description: "",
    file: null,
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data.file);
    const info = new FormData();
    info.set("title", data.title);
    info.set("description", data.description);
    info.set("file", data.file);
    await axios
      .post("http://localhost:8000/api/v1/user", info, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("Нийтлэл амжилттай");
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
  const onFileChange = (event) => {
    setData({
      ...data,
      file: event.target.files[0],
    });
  };

  return (
    <div className="  flex mx-auto  justify-center mt-[100px] ">
      <div className=" flex-col ">
        <form>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Нэр : </span>
            </label>
            <input
              onChange={onInputChange}
              name="title"
              value={data.title}
              type="text"
              placeholder="Гарчиг"
              className="input input-bordered  w-full"
            />
            <label className="label">
              <span className="label-text"> Утас : </span>
            </label>
            <input
              onChange={onInputChange}
              name="title"
              value={data.title}
              type="text"
              placeholder="Гарчиг"
              className="input input-bordered  w-full"
            />
            <label className="label">
              <span className="label-text"> Имэйл : </span>
            </label>
            <input
              onChange={onInputChange}
              name="title"
              value={data.title}
              type="text"
              placeholder="Гарчиг"
              className="input input-bordered  w-full"
            />
            <label className="label">
              <span className="label-text-alt">Тайлбар бичнэ үү!</span>
            </label>
          </div>
          <textarea
            placeholder="Тайлбар"
            name="description"
            onChange={onInputChange}
            value={data.description}
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>

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
          пост нэмэх
        </button>
      </div>
    </div>
  );
}
