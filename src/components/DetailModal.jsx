import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
export default function DetailModal({ title, _id, name, description, img }) {
  const [comment, setComment] = useState([]);
  // const { id } = useParams();
  console.log(_id, "DETAILS  : id ");
  axios
    .get(`http://localhost:8000/api/v1/post/${_id}/comments`)
    .then((res) => setComment(res.data.data))
    .catch((err) => {
      console.log(err);
    });
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <span className="text-xl">{title}</span>
          <span className="text-xl"> description {description} </span>
          <span className="text-xl">{_id} </span>
          <p className="py-4">test modal</p> <p>{img}</p>
          <img src={`http://localhost:8000/uploads/${img}`} alt="Album" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
