import React from "react";

const Serach = ({ s, sQuery }) => {
  return (
    <>
      <h1>{sQuery}</h1>
      <input placeholder="Search" onChange={s} />
    </>
  );
};

export default Serach;
