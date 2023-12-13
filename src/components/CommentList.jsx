import { data } from "autoprefixer";
import axios from "axios";
import React, { useState, useEffect } from "react";
export default function CommentList({ commentId }) {
  const [ data , setData] = useState([])
  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/v1/post/${commentId}/comments`)
      .then((res) => setData(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchData();
  }, [commentId])
  return (
    <div className="my-2">
      {data.map((el, i) => {
        return (
          <ul className="menu menu-xs text-white    my-2 w-full flex  justify-start bg-gray-400">
            <li className="">
              <span className=" underline  text-xl text-blue-300">   {el.createUser?.name} </span>
              <span> comment :   {el.comment}</span>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
