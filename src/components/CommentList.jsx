import React from "react";

export default function CommentList({ comment }) {
  return (
    <div className="my-2">
      {comment.map((el, i) => {
        return (
          <ul className="menu menu-xs bg-base-200 w-56 rounded-box">
            <li className="">
              нэр {el.createUser?.name} : {el.comment}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
