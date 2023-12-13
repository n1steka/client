import axios from "axios";
import React, { useState } from "react";
// import axiosUrl from '../utils/axioxUrl';
export default function CommentWrite({ post_id }) {
  // console.log(axiosUrl)
  // console.log(post_id, "post ID ");
  const token = localStorage.getItem("token");
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(0);
  // if (!like) {
  //   alert("Та  like  дарсан байна ");
  // }
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
        err.response.data.msg === "Invalid token. Please log in again." ? alert("Эхлээд нэвтрэнэ үү ! ") : console.log(err.response.data.msg)
      });
  };
  return (
    <div className="flex flex-row">
      <form>
        <input
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          value={comment}
          type="text"
          placeholder="Сэтгэгдэл бичих ......"
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={onSubmit}
          className="ml-2 btn btn-active   my-4 w-[250px] "
        >
          Нэмэх
        </button>
      </form>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
        class="bg-blue-400 hover:bg-blue-700 ml-4 h-[45px]
               text-white font-bold py-2 px-4 rounded w-[80px]"
      >
        (like)
      </button>
      <span className="ml-2 mt-2 font-bold text-2xl"> {like}</span>
    </div>
  );
}
