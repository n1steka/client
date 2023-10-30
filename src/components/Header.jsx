import React from "react";
import { images } from "../constans";
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
];

export default function Header() {
  return (
    <div className="navbar bg-base-100  lg:px-12 xl:px-12">
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

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={images.Logo} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
