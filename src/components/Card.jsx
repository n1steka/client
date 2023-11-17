import React from "react";
import { images } from "../constans";
import CommentWrite from "./commentWrite";
import DetailModal from "../components/DetailModal";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function Card({ posts, update }) {
  const [el, setEl] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="">
      {posts.map((index, i) => {
        return (
          <div
            key={i}
            className="flex card lg:card-side bg-base-100 shadow-xl    mx-auto w-[800px]  my-12"
          >
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
              {update ? (
                <button className="btn btn-outline btn-info w-[80px] ml-[280px]">
                  update
                </button>
              ) : null}
              {update ? (
                <button className="btn btn-outline btn-secondary w-[80px] ml-[280px]">
                  delete
                </button>
              ) : null}
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
                дэлгэрэнгүй
              </button>

              {/* <DetailModal
                title={posts[el]?.title}
                description={posts[el]?.description}
                name={posts[el]?.name}
                img={posts[el]?.photo}
                _id={posts[el]?._id}
              /> */}

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
