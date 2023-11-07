import axios from "axios";
import React, { useState } from "react";
// import axiosUrl from '../utils/axioxUrl';
export default function CommentWrite({ post_id }) {
  // console.log(axiosUrl)
  // console.log(post_id, "post ID ");
  const token = localStorage.getItem("token");
  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/v1/comment",
        {
          comment: comment,
          postId: post_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert("comment done ");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form>
        <input
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          value={comment}
          type="text"
          placeholder="Сэтгэгдэл бичих ......"
          className="input input-bordered w-full max-w-xs"
        />
        <button onClick={onSubmit} className="ml-2 btn btn-active   ">
          Нэмэх
        </button>
      </form>
    </div>
  );
}
