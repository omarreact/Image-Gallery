import React from "react";

const UploadImage = ({ handleFileChange, handleUpload }) => {
  return (
    <div>
      <div className="input-group d-flex align-items-center border border-success p-1 rounded">
        <div className="custom-file">
          <input
            type="file"
            onChange={handleFileChange}
            className="custom-file-input"
            id="inputGroupFile04"
            multiple
          />
        </div>
        <div className="input-group-append">
          <button
            onClick={handleUpload}
            className="btn btn-primary"
            type="button"
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
