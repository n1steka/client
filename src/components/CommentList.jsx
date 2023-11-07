import React from "react";

export default function CommentList({ comment }) {
  return (
    <div>
      {comment.map((el, i) => {
        return (
          <ul className="menu menu-xs bg-base-200 w-56 rounded-box">
            <li>
              <a> {el.comment}</a>
            </li>
          </ul>
        );
      })}
    </div>
  );
}