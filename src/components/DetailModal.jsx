import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
export default function DetailModal({ title, _id, name, description, img }) {
  const [comment, setComment] = useState([]);
  // const { id } = useParams();
  console.log(_id, "DETAILS  : id ");

  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/v1/post/${_id}/comments`)
      .then((res) => setComment(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchData();
  }, [_id])
  return (
    <div className=" my-2 ">
      <dialog id="my_modal_1" className=" w-[full] modal ">
        <div className="modal-box my-2 w-[1200px]">
          <span className="text-xl">{title}</span>
          <span className="text-xl"> description : {description} </span>
          <img src={`http://localhost:8000/uploads/${img}`} className=" my-2  md:w-[400px]" alt="Album" />
          <CommentList comment={comment} />
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
