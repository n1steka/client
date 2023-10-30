import React from "react";
import { images } from "../constans";
import Profile from "./Profile";
export const header = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "My post",
    url: "/MyPost",
  },
  {
    name: "Post",
    url: "/Post",
  },
  {
    name: "Notification",
    url: "/",
  },
  {
    name: "Login",
    url: "/login",
  },
];

export default function Header() {
  return (
    <div className="navbar bg-base-100  lg:px-12 xl:px-12    sticky ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl ">
          <img src={images.Logo} width={50} />{" "}
        </a>
      </div>
      <div className="">
        <ul className="flex">
          {header.map((index) => {
            return (
              <div className="">
                <li className=" px-4 cursor-pointer  ">
                  {" "}
                  <a href={index.url}>{index.name}</a>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <Profile />
      </div>
    </div>
  );
}
