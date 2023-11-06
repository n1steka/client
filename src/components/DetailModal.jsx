import React from "react";
import { useParams } from "react-router-dom";

export default function DetailModal({ title, _id }) {
  // const { id } = useParams();
  console.log(_id, "DETAILS  : id ");
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <span className="text-xl">{title}</span>
          <span className="text-xl">{_id} </span>

          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
