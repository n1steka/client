import React from "react";
import { images } from "../constans";
import CommentWrite from "./commentWrite";
export default function Card({ posts }) {
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
                {posts[0]?.createUser?.name}
              </span>
              <h2 className="  text-xl font-medium"> title : {index.title}</h2>
              <p>{index.description}</p>
              <CommentWrite post_id={index._id} />
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
