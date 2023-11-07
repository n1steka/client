import React, { useState } from "react";
import { images } from "../constans";
import CommentWrite from "./commentWrite";
import DetailModal from "../components/DetailModal";
import { Link } from "react-router-dom";
export default function Card({ posts }) {
  const [el, setEl] = useState(0);
  return (
    <div className="">
      {posts.map((index, i) => {
        return (
          <div className="flex card lg:card-side bg-base-100 shadow-xl    mx-auto w-[800px]  my-12">
            <figure>
              <img
                src={`http://localhost:8000/uploads/${index.photo}`}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <span className=" text-2xl font-semibold underline">
                {posts[i]?.createUser?.name}{" "}
              </span>
              <h2 className="  text-xl font-medium"> title : {index.title}</h2>
              <p>{index.description}</p>
              <CommentWrite post_id={index._id} />
              <button
                className="btn"
                onClick={() => {
                  setEl(i);
                  document.getElementById("my_modal_1").showModal();
                }}
              >
                open modal
              </button>

              <DetailModal
                title={posts[el]?.title}
                description={posts[el]?.description}
                name={posts[el]?.name}
                img={posts[el]?.photo}
                _id={posts[el]?._id}
              />
              <div className="card-actions justify-end">
                <Link to={`read/${index._id}`}>
                  <button className="btn btn-primary">Дэлгэрэнгүй</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
