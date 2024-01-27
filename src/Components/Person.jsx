import React from "react";
export function Person({ name, nickName, images }) {
  const img = images?.[0]?.small?.url;
  return (
    <div>
      <h1>{name}</h1>
      <h2> {nickName}</h2>
      <img src={img} alt="image" style={{ width: "200px" }} />
    </div>
  );
}
