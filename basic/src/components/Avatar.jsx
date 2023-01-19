import React from "react";

export function Avatar({ image, isNew }) {
  return (
    <div>
      <img src={image} alt="avatar" className="photo" />
      {isNew && <span className="new">NEW</span>}
    </div>
  );
}
