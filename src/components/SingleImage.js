import React from "react";

const SingleImage = ({ image, handleToggleSelect, selected, id }) => {
  return (
    <div className="image-box">
      <input
        type="checkbox"
        className="check_box"
        checked={selected}
        onChange={() => handleToggleSelect(id)}
      />
      <label htmlFor="vue-checkbox">
        <img className="" src={image} alt="watch" />
      </label>
      <div className="middle" />
    </div>
  );
};

export default SingleImage;
